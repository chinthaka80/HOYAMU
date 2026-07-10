# HOYAMU.NET

**Document Name:** API Chapter 12 - Admin & Moderator API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 12: Admin & Moderator API

These endpoints manage moderation actions, review pipelines, and system configurations.

---

## 12.1. Approve Listing (දැන්වීමක් අනුමත කිරීම)
* **Endpoint:** `POST /api/v1/admin/listings/{uuid}/approve` (Moderator/Admin token required)
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Listing published successfully."
}
```

---

## 12.2. Reject Listing (දැන්වීමක් ප්‍රතික්ෂේප කිරීම)
* **Endpoint:** `POST /api/v1/admin/listings/{uuid}/reject` (Moderator/Admin token required)
* **Request Body:**
```json
{
  "reason": "Inappropriate images uploaded.",
  "ban_user": false
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Listing rejected and user notified."
}
```

---

## 12.3. Ban User Profile (පරිශීලකයෙකු අවහිර කිරීම)
* **Endpoint:** `POST /api/v1/admin/users/{uuid}/ban` (Admin token required)
* **Request Body:**
```json
{
  "ban_reason": "Multiple fraudulent property ads posted."
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "User account banned and listings disabled."
}
```
