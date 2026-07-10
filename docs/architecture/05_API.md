# HOYAMU.NET

**Document Name:** Architecture Chapter 5 - API Architecture

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 5: API Architecture & Standards

## 5.1. RESTful Standards

All frontend-backend interactions utilize stateless REST APIs over HTTPS:

- **JSON Payloads:** Request and response payloads must use JSON formatting.
- **Versioning:** API routes are versioned to support future mobile app versions without breaking compatibility:
  `https://api.hoyamu.net/v1/listings`
- **Standard HTTP Codes:**
  * `200 OK` - successful request.
  * `201 Created` - Resource created successfully.
  * `400 Bad Request` - Validation failures.
  * `401 Unauthorized` - Invalid or missing token.
  * `403 Forbidden` - Insufficient role permissions.
  * `429 Too Many Requests` - Rate limit exceeded.

---

## 5.2. Pagination & Parameter Enforcements

- **Pagination:** Data queries enforce offset caps. The default pagination returns 20 objects per page:
  `GET /listings?page=1&per_page=20`
- **Filtering Parameters:** Direct filter bindings are supported on attributes:
  `GET /listings?category=vehicles&make=toyota`
- **Sorting Fields:** Enforces standard order attributes:
  `GET /listings?sort_by=created_at&order=desc`
- **Response Headers:** Cache metadata is injected into API responses to allow browser-level caching for static objects.
