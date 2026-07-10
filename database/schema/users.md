# HOYAMU.NET - Database Table Schema: users

**Document:** Database Table Schema
**Table Name:** `users`
**Version:** 1.0
**Project:** HOYAMU.NET

---

## 1. Table Description
Stores the primary authentication credentials, roles, and status of general users, merchants, and system administrators.

---

## 2. Columns Schema

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| **id** | BIGSERIAL | PRIMARY KEY | Internal incremental database index. |
| **uuid** | UUID | UNIQUE, NOT NULL | Publicly exposed unique identifier. |
| **name** | VARCHAR(255) | NOT NULL | Full name of the user or contact person. |
| **email** | VARCHAR(255) | UNIQUE, NOT NULL | email address used for login and notifications. |
| **phone** | VARCHAR(20) | NULL | Verified mobile phone number for OTP. |
| **password** | VARCHAR(255) | NOT NULL | bcrypt hashed password string. |
| **role** | VARCHAR(50) | DEFAULT 'user' | Access levels: 'user', 'business_owner', 'moderator', 'admin'. |
| **is_verified** | BOOLEAN | DEFAULT FALSE | Phone verification state. |
| **created_at** | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Timestamp of registration. |
| **updated_at** | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Timestamp of last record modification. |
| **deleted_at** | TIMESTAMP | NULL | Soft deletion timestamp (Laravel standard). |

---

## 3. Indexes & Keys
* **Primary Key:** `id`
* **Unique Index:** `uuid`
* **Unique Index:** `email`
* **Index:** `phone` (optimized for OTP lookup)
