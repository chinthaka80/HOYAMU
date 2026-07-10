# HOYAMU.NET

**Document Name:** API Chapter 9 - News & Blog API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 9: News & Blog API

These endpoints retrieve local announcements, updates, and optimization blog articles.

---

## 9.1. Get Articles List (පුවත් සහ බ්ලොග් ලිපි ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/news`
* **Query Parameters:**
  - `category` (string: 'guides', 'market-trends')
  - `limit` (integer: default 10)
* **Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "slug": "how-to-buy-property-sri-lanka",
      "title": "A Guide to Buying Property in Sri Lanka (2026)",
      "excerpt": "Key legal procedures and district analyses before purchasing land.",
      "author": "Chinthaka Nuwan",
      "published_at": "2026-07-10T08:00:00Z"
    }
  ]
}
```

---

## 9.2. Get Single Article (නිශ්චිත ලිපියක් ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/news/{slug}`
* **Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "slug": "how-to-buy-property-sri-lanka",
    "title": "A Guide to Buying Property in Sri Lanka (2026)",
    "content": "Full HTML or markdown article body...",
    "author": "Chinthaka Nuwan",
    "published_at": "2026-07-10T08:00:00Z"
  }
}
```
