# HOYAMU.NET

**Document Name:** API Chapter 7 - Properties API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 7: Properties API

These endpoints retrieve and manage real estate listings metadata.

---

## 7.1. Get Property Metadata (දේපළ තොරතුරු ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/properties/{listing_uuid}`
* **Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "listing_uuid": "340e8400-e29b-41d4-a716-4466554400bb",
    "property_type": "house",
    "size_sqft": 2400,
    "size_perches": 12.5,
    "bedrooms": 4,
    "bathrooms": 3,
    "is_negotiable": true
  }
}
```

---

## 7.2. Create Property Listing (නව දේපළ දැන්වීමක් පළ කිරීම)
* **Endpoint:** `POST /api/v1/listings` (Authorization required)
* **Request Body (Real Estate Specific):**
```json
{
  "title_en": "4 Bedroom Luxury House in Kurunegala",
  "listing_type": "property",
  "price": 28000000.00,
  "location_district": "Kurunegala",
  "location_city": "Kurunegala City",
  "description_en": "Modern architect designed house close to Kurunegala town.",
  "meta_data": {
    "property_type": "house",
    "size_sqft": 2400,
    "size_perches": 12.5,
    "bedrooms": 4,
    "bathrooms": 3,
    "is_negotiable": true
  }
}
```
* **Response (201 Created):**
```json
{
  "success": true,
  "message": "Property ad submitted.",
  "listing_uuid": "340e8400-e29b-41d4-a716-4466554400bb"
}
```
