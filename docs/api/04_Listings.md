# HOYAMU.NET

**Document Name:** API Chapter 4 - Listings API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 4: Listings API

These endpoints manage classified listings across all general categories.

---

## 4.1. Get Listings List (දැන්වීම් නාමාවලිය ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/listings`
* **Query Parameters:**
  - `page` (integer) - Default 1.
  - `type` (string: 'job', 'vehicle', 'property') - Filter by category.
  - `featured` (boolean: true/false) - Filter featured listings.
* **Response (200 OK):**
```json
{
  "success": true,
  "current_page": 1,
  "total_records": 120,
  "data": [
    {
      "uuid": "780e8400-e29b-41d4-a716-446655440023",
      "title": "Toyota Prius 2018 for Sale",
      "slug": "toyota-prius-2018-for-sale",
      "listing_type": "vehicle",
      "price": 7500000.00,
      "district": "Colombo",
      "city": "Nugegoda",
      "is_featured": true,
      "created_at": "2026-07-10T14:30:00Z"
    }
  ]
}
```

---

## 4.2. Create Listing (නව දැන්වීමක් පළ කිරීම)
* **Endpoint:** `POST /api/v1/listings` (Authorization required)
* **Request Body:**
```json
{
  "title_en": "Toyota Prius 2018 for Sale",
  "listing_type": "vehicle",
  "price": 7500000.00,
  "location_district": "Colombo",
  "location_city": "Nugegoda",
  "description_en": "Excellent condition vehicle.",
  "meta_data": {
    "vehicle_make": "Toyota",
    "vehicle_model": "Prius",
    "model_year": 2018,
    "mileage_km": 45000,
    "transmission": "automatic",
    "fuel_type": "hybrid"
  }
}
```
* **Response (201 Created):**
```json
{
  "success": true,
  "message": "Listing submitted. Pending moderation.",
  "listing_uuid": "780e8400-e29b-41d4-a716-446655440023"
}
```
