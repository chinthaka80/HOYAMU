# HOYAMU.NET

**Document Name:** API Chapter 10 - Search & Filter API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 10: Search & Filter API

These endpoints handle the high-performance instant fuzzy search powered by Meilisearch.

---

## 10.1. Search Listings (දැන්වීම් සෙවීම)
* **Endpoint:** `GET /api/v1/search`
* **Query Parameters:**
  - `q` (string) - Fuzzy query term (e.g. "toyota"). Supports typo tolerance.
  - `category` (string) - Category slug filter.
  - `district` (string) - District location filter.
  - `city` (string) - City location filter.
  - `sort_by` (string: 'price', 'latest')
  - `order` (string: 'asc', 'desc')
* **Response (200 OK):**
```json
{
  "success": true,
  "query": "toyota",
  "total_hits": 24,
  "processing_time_ms": 12,
  "data": [
    {
      "uuid": "550e8400-e29b-41d4-a716-4466554400cc",
      "title": "Toyota Aqua 2018",
      "listing_type": "vehicle",
      "price": 6850000.00,
      "district": "Colombo",
      "city": "Nugegoda"
    }
  ]
}
```
*Note: The `processing_time_ms` tracks the index search latency executing inside the Meilisearch container layer.*
