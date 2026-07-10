# HOYAMU.NET

**Document Name:** API Chapter 1 - Authentication API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 1: Authentication API

## 1.1. User Registration (ලියාපදිංචි වීම)
* **Endpoint:** `POST /api/v1/auth/register`
* **Request Body:**
```json
{
  "name": "Chinthaka Nuwan",
  "email": "chinthaka@hoyamu.net",
  "password": "SecurePassword123",
  "phone": "0771234567"
}
```
* **Response (211 Created):**
```json
{
  "success": true,
  "message": "User registered successfully.",
  "data": {
    "user": {
      "uuid": "450e8400-e29b-41d4-a716-446655440000",
      "name": "Chinthaka Nuwan",
      "email": "chinthaka@hoyamu.net",
      "phone": "0771234567"
    },
    "token": "1|qWf982Kdjks..."
  }
}
```

---

## 1.2. User Login (පිවිසීම)
* **Endpoint:** `POST /api/v1/auth/login`
* **Request Body:**
```json
{
  "email": "chinthaka@hoyamu.net",
  "password": "SecurePassword123"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "2|lKjdfp187asd..."
}
```

---

## 1.3. User Logout (පද්ධතියෙන් ඉවත් වීම)
* **Endpoint:** `POST /api/v1/auth/logout` (Authorization required)
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```
