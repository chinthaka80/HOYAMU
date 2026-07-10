# HOYAMU.NET

**Document Name:** API Chapter 2 - Users API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** 

**Project:** HOYAMU.NET

---

# API Chapter 2: Users API

These endpoints allow users to manage their profiles and account settings.

---

## 2.1. Get User Profile (පරිශීලක තොරතුරු ලබා ගැනීම)
* **Endpoint:** `GET /api/v1/users/{uuid}` (Authorization required)
* **Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "uuid": "450e8400-e29b-41d4-a716-446655440000",
    "name": "",
    "email": "savi@hoyamu.net",
    "phone": "0771234567",
    "role": "business_owner",
    "created_at": "2026-07-10T14:30:00Z"
  }
}
```

---

## 2.2. Update User Profile (පරිශීලක තොරතුරු යාවත්කාලීන කිරීම)
* **Endpoint:** `PUT /api/v1/users/{uuid}` (Authorization required)
* **Request Body:**
```json
{
  "name": " Updated",
  "phone": "0779999999"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Profile updated successfully.",
  "data": {
    "uuid": "450e8400-e29b-41d4-a716-446655440000",
    "name": " Updated",
    "phone": "0779999999"
  }
}
```

---

## 2.3. Delete Account (ගිණුම මකා දැමීම)
* **Endpoint:** `DELETE /api/v1/users/{uuid}` (Authorization required)
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Account soft-deleted successfully."
}
```
