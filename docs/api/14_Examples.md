# HOYAMU.NET

**Document Name:** API Chapter 14 - Examples Collection

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 14: Examples Collection

This document aggregates request and response payloads for common API operations.

---

## 14.1. Complete Ad Posting Workflow (Automotive Category)

### Step 1: Request JWT Token
* **POST** `/api/v1/auth/login`
* **Request:**
```json
{
  "email": "nuwan@hoyamu.net",
  "password": "password"
}
```
* **Response:**
```json
{
  "success": true,
  "token": "3|tYsdj182Ksdks..."
}
```

### Step 2: Upload Vehicle Photo
* **POST** `/api/v1/upload`
* **Headers:** `Authorization: Bearer 3|tYsdj182Ksdks...`
* **Form-Data:** `file: [binary_image]`
* **Response:**
```json
{
  "success": true,
  "image_url": "https://cdn.hoyamu.net/uploads/images/aqua_2018.webp",
  "image_uuid": "img_991823kdjfs"
}
```

### Step 3: Publish Ad Listing
* **POST** `/api/v1/listings`
* **Headers:** `Authorization: Bearer 3|tYsdj182Ksdks...`
* **Request Body:**
```json
{
  "title_en": "Toyota Aqua S 2018",
  "listing_type": "vehicle",
  "price": 6850000.00,
  "location_district": "Colombo",
  "location_city": "Nugegoda",
  "description_en": "Excellent condition vehicle.",
  "image_uuids": ["img_991823kdjfs"],
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
* **Response:**
```json
{
  "success": true,
  "message": "Listing submitted. Pending moderation.",
  "listing_uuid": "550e8400-e29b-41d4-a716-4466554400cc"
}
```
