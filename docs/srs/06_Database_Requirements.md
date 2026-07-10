# HOYAMU.NET

**Document Name:** SRS Chapter 6 - Database Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 6: Database Requirements & Constraints

## 6.1. Database Standards

The relational model utilizes PostgreSQL to ensure transaction integrity (ACID compliance) and dynamic data capability:

- **Entity Normalization:** Tables must comply with Third Normal Form (3NF) standards. Polymorphic tables link details tables to the main `listings` base table.
- **Primary Keys:** Relational tables use `BIGSERIAL` auto-incrementing integer keys for internal indexing. User-facing identifier lookups use `UUIDv4` keys to prevent direct URL scanning attacks.
- **Foreign Key Integrity:** Enforce strict foreign key constraints. Set `ON DELETE CASCADE` appropriately for child records (e.g. deleting a listing deletes job metadata records).

---

## 6.2. Performance Optimizations

- **Index Optimization:**
  - Create Unique B-Tree indexes on all URL lookup slug attributes.
  - Create Composite indexes on status and listing types to speed up active classified lists search.
  - Spatial indexes (PostGIS GIST or standard POINT types) to process geolocation radius lookups.
- **Soft Deletions:** All main user tables, directory tables, and listings implement soft deletion models (records flagged with a `deleted_at` timestamp).
- **Audit Logging:** Sensitive financial transactions, user verification states, and role changes must register audit trails tracking the editor user, timestamp, and modification details.
