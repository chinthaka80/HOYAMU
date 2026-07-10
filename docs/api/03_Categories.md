# HOYAMU.NET

**Document Name:** API Chapter 3 - Categories API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 3: Categories API

These endpoints retrieve the structured category trees used across the platform.

---

## 3.1. Fetch Category Tree (සියලුම ප්‍රධාන කාණ්ඩ ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/categories`
* **Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name_en": "Vehicles",
      "name_si": "වාහන",
      "slug": "vehicles",
      "subcategories": [
        {
          "id": 12,
          "name_en": "Cars",
          "name_si": "මෝටර් රථ",
          "slug": "cars"
        },
        {
          "id": 13,
          "name_en": "Vans",
          "name_si": "වෑන් රථ",
          "slug": "vans"
        }
      ]
    },
    {
      "id": 2,
      "name_en": "Jobs",
      "name_si": "රැකියා",
      "slug": "jobs",
      "subcategories": []
    }
  ]
}
```
