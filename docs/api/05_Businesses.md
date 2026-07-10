# HOYAMU.NET

**Document Name:** API Chapter 5 - Businesses API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 5: Businesses API

These endpoints manage the Yelp-style Business Directory profiles.

---

## 5.1. Fetch Business Profile (ව්‍යාපාරික පිටුවක විස්තර ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/businesses/{slug}`
* **Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "business_name": "Nuwan Auto Garages",
    "slug": "nuwan-auto-garages",
    "rating": 4.8,
    "reviews_count": 34,
    "is_verified": true,
    "phone": "0771234567",
    "email": "info@nuwanauto.lk",
    "website_url": "https://nuwanauto.lk",
    "business_hours": {
      "monday": "08:00-17:00",
      "tuesday": "08:00-17:00",
      "sunday": "closed"
    }
  }
}
```

---

## 5.2. Register Business Profile (නව ව්‍යාපාරයක් ලියාපදිංචි කිරීම)
* **Endpoint:** `POST /api/v1/businesses` (Authorization required)
* **Request Body:**
```json
{
  "business_name": "Nuwan Auto Garages",
  "phone": "0771234567",
  "email": "info@nuwanauto.lk",
  "website_url": "https://nuwanauto.lk",
  "business_hours": {
    "monday": "08:00-17:00",
    "tuesday": "08:00-17:00",
    "sunday": "closed"
  }
}
```
* **Response (211 Created):**
```json
{
  "success": true,
  "message": "Business profile registered successfully. Verification pending.",
  "business_slug": "nuwan-auto-garages"
}
```
