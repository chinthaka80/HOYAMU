# HOYAMU.NET

**Document Name:** API Chapter 8 - Vehicles API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 8: Vehicles API

These endpoints retrieve and manage vehicle listing metadata.

---

## 8.1. Get Vehicle Attributes (වාහනයක විස්තර ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/vehicles/{listing_uuid}`
* **Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "listing_uuid": "550e8400-e29b-41d4-a716-4466554400cc",
    "vehicle_make": "Toyota",
    "vehicle_model": "Aqua",
    "model_year": 2018,
    "mileage_km": 42000,
    "transmission": "automatic",
    "fuel_type": "hybrid",
    "engine_capacity_cc": 1500
  }
}
```

---

## 8.2. Create Vehicle Listing (නව වාහන දැන්වීමක් පළ කිරීම)
* **Endpoint:** `POST /api/v1/listings` (Authorization required)
* **Request Body (Automotive Specific):**
```json
{
  "title_en": "Toyota Aqua S Grade 2018",
  "listing_type": "vehicle",
  "price": 6850000.00,
  "location_district": "Colombo",
  "location_city": "Nugegoda",
  "description_en": "First owner, low mileage home used car.",
  "meta_data": {
    "vehicle_make": "Toyota",
    "vehicle_model": "Aqua",
    "model_year": 2018,
    "mileage_km": 42000,
    "transmission": "automatic",
    "fuel_type": "hybrid",
    "engine_capacity_cc": 1500
  }
}
```
* **Response (201 Created):**
```json
{
  "success": true,
  "message": "Vehicle ad submitted.",
  "listing_uuid": "550e8400-e29b-41d4-a716-4466554400cc"
}
```
