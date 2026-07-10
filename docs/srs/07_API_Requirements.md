# HOYAMU.NET

**Document Name:** SRS Chapter 7 - API Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 7: API Requirements

## 7.1. API Standards

All frontend-backend communications must implement RESTful design standards over HTTPS:

- **Data Serialization:** Request and response bodies must use JSON (JavaScript Object Notation).
- **Authentication Header:** All protected endpoints require a secure Sanctum token:
  `Authorization: Bearer <token_string>`
- **Response Payloads:** Responses must follow a standardized structure, providing consistent status indicators and diagnostic logs:
```json
{
  "status": "success | error",
  "message": "User-friendly status message",
  "data": { ... }
}
```

---

## 7.2. Query Parameters (Pagination, Filters, Sorts)

To prevent resource exhaustion, all data indexing endpoints must enforce query-level constraints:
- **Pagination:** Implement index offset limits. Default pagination sizes are capped at 20 listings per response:
  `GET /listings?page=2&per_page=20`
- **Filtering:** Use standardized category filters:
  `GET /listings?type=vehicle&fuel=hybrid`
- **Sorting:** Support parameter fields:
  `GET /listings?sort_by=price&order=desc`
- **OAuth Support:** The API gateway must support OAuth token claims to integrate Google/Facebook social registrations.
