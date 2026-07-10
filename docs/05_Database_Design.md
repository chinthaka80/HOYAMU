# HOYAMU.NET

**Document Name:** Database Design Master Plan

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

**Database Engine:** PostgreSQL (v17+)

---

# HOYAMU.NET - Database Design Master Plan

This is the Master Index and architectural summary for the database engine behind HOYAMU.NET. To ensure maintainability and support scaling, table schemas are stored as individual files inside the [database/schema/](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/) workspace folder.

---

## 1. Database Technology & Objectives

HOYAMU.NET utilizes **PostgreSQL v17+** as its primary transactional database. The schema aims to achieve:
- **High Performance:** Response times under 15 milliseconds for standard queries.
- **Relational Integrity:** Strict foreign keys and composite constraints to prevent orphan entries.
- **Dynamic Capabilities:** JSONB fields to store unstructured category filters and schedules.
- **Typo Tolerance Support:** Synchronized indexes with Meilisearch.

---

## 2. Core Tables Schema Index

The individual table layouts are documented in detail below:

* **[users Schema](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/users.md):** User authentication, roles, verification states, and contact phone numbers.
* **[listings Schema](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/listings.md):** The polymorphic base listings table containing standard parameters (prices, districts, slugs, types).
* **[businesses Schema](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/businesses.md):** Yelp-style business profiles, operating hours logs, and reviews stats.
* **[properties Schema](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/properties.md):** Real estate metadata (sizes in sqft/perches, bedrooms count).
* **[vehicles Schema](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/vehicles.md):** Automotive parameters (brand model, fuel, transmission type, mileage).
* **[jobs Schema](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/database/schema/jobs.md):** Vacancy details (salary ranges, experience limits, recruiter names).

---

## 3. Database Architecture & Design Principles

```
  Next.js Frontend SSR Queries
              |
              v
   Laravel 12 API Controllers (Sanctum Tokens)
              |
              +---> [ Redis ] (Cache layers for quick views lookup)
              |
              +---> [ PostgreSQL 17 DB ] (Main ACID data tables)
              |
              +---> [ Meilisearch Container ] (Fuzzy search engine index)
```

1. **Third Normal Form (3NF):** Data is normalized to prevent duplication. Polymorphic schemas inherit standard attributes from the base `listings` parent.
2. **Naming Convention:** Table names use lower-case plural formats (e.g., `users`, `listings`). Column names use snake_case formatting (e.g., `created_at`, `deleted_at`).
3. **UUID Exposure:** Public routes look up records using `UUIDv4` keys to prevent URL indexing scanning attacks. Internal database joins continue using fast numeric primary keys (`BIGINT`).

---

## 4. Operational Schemas & Strategies

- **Index Strategy:** Indexes are configured on slugs, emails, phone numbers, and composite categories fields. High-volume search indexing uses PostgreSQL GIN vector indexes.
- **Soft Deletion Protocol:** Main tables enforce Laravel Soft Deletes, updating a `deleted_at` timestamp rather than purging records.
- **Audit Logs:** All admin updates, payment transactions, and merchant approvals write entries to `audit_logs` tracking user IDs, dynamic actions, browser agents, and timestamps.
- **Caching (Redis):** Frequently read lookup variables (categories, district trees, top listings) cache into memory nodes.
