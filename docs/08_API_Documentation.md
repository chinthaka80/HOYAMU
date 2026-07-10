# HOYAMU.NET

**Document Name:** API Documentation Master Index

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

**API Version:** v1

---

# API Documentation Master Index

This is the Master Index for HOYAMU.NET's RESTful API specifications. The documentation files are organized inside the [docs/api/](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/) folder.

---

## 📄 API Documentation Chapters Index

Click on the links below to access the detailed endpoint contracts and payload definitions:

1. **[01_Authentication.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/01_Authentication.md):** User registration (`/register`), login (`/login`), and logout (`/logout`) endpoints.
2. **[02_Users.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/02_Users.md):** Profile retrieval and deletion endpoints.
3. **[03_Categories.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/03_Categories.md):** Structured categories tree data access endpoints.
4. **[04_Listings.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/04_Listings.md):** Core classified listings listings and CRUD workflows.
5. **[05_Businesses.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/05_Businesses.md):** Yelp-style business profiles registration and review endpoints.
6. **[06_Jobs.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/06_Jobs.md):** Job postings and recruiter candidate application endpoints.
7. **[07_Properties.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/07_Properties.md):** Real estate metadata fields (Sqft, Perches, Bedrooms) endpoints.
8. **[08_Vehicles.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/08_Vehicles.md):** Vehicle specifications metadata (make, model, fuel type) endpoints.
9. **[09_News.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/09_News.md):** Blog articles and localized guides access endpoints.
10. **[10_Search.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/10_Search.md):** Instant fuzzy search parameters, pagings, sorting filters.
11. **[11_AI.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/11_AI.md):** AI translation prompts and auto-description generation endpoints.
12. **[12_Admin.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/12_Admin.md):** Moderator listing reviews approvals, bans, and reporting endpoints.
13. **[13_Webhooks.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/13_Webhooks.md):** Callback listeners for payment processing and affiliate tracking.
14. **[14_Examples.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/api/14_Examples.md):** Complete collections of JSON payload templates.

---

## 🛠 API Standards & Environment Configurations

- **Development Endpoint:** `http://localhost:8000/api/v1`
- **Production Endpoint:** `https://api.hoyamu.net/v1`
- **Global Headers:**
  * `Accept: application/json`
  * `Content-Type: application/json`
  * `Authorization: Bearer <SanctumToken>`

---

## 🛠 API Folder Structure Preview

```
HOYAMU/docs/
├── 08_API_Documentation.md         # This Master Index
└── api/
    ├── 01_Authentication.md
    ├── 02_Users.md
    ├── 03_Categories.md
    ├── 04_Listings.md
    ├── 05_Businesses.md
    ├── 06_Jobs.md
    ├── 07_Properties.md
    ├── 08_Vehicles.md
    ├── 09_News.md
    ├── 10_Search.md
    ├── 11_AI.md
    ├── 12_Admin.md
    ├── 13_Webhooks.md
    └── 14_Examples.md
```

Structuring and using this API documentation ensures seamless development coordination between frontend designers, mobile app programmers, and integration systems developers.
