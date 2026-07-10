# HOYAMU.NET - Database Table Schema: listings

**Document:** Database Table Schema
**Table Name:** `listings`
**Version:** 1.0
**Project:** HOYAMU.NET

---

## 1. Table Description
The polymorphic foundation table containing base listing attributes. Jobs, property, vehicles, and directory items extend this table using listing primary key joins.

---

## 2. Columns Schema

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| **id** | BIGSERIAL | PRIMARY KEY | Base listing unique identifier. |
| **user_id** | BIGINT | REFERENCES users(id) ON DELETE CASCADE | ID of the publishing user. |
| **title_en** | VARCHAR(255) | NOT NULL | English listing title. |
| **title_si** | VARCHAR(255) | NULL | Sinhala listing title. |
| **title_ta** | VARCHAR(255) | NULL | Tamil listing title. |
| **slug** | VARCHAR(255) | UNIQUE, NOT NULL | Semantic SEO-friendly URL slug. |
| **description_en** | TEXT | NOT NULL | English listing description. |
| **description_si** | TEXT | NULL | Sinhala listing description. |
| **description_ta** | TEXT | NULL | Tamil listing description. |
| **listing_type** | VARCHAR(50) | NOT NULL | Category tag: 'job', 'property', 'vehicle', 'directory', 'classified'. |
| **price** | NUMERIC(15,2) | NULL | Listing price (LKR). |
| **location_district** | VARCHAR(100) | NOT NULL | Target district (e.g. Colombo, Kandy). |
| **location_city** | VARCHAR(100) | NOT NULL | Target city (e.g. Nugegoda). |
| **location_coordinates** | POINT | NULL | Geolocation coordinate object (Lat, Lng). |
| **status** | VARCHAR(50) | DEFAULT 'pending' | Status code: 'pending', 'active', 'rejected', 'expired'. |
| **is_featured** | BOOLEAN | DEFAULT FALSE | Homepage highlighted status. |
| **is_premium** | BOOLEAN | DEFAULT FALSE | Verified merchant status flag. |
| **views_count** | INT | DEFAULT 0 | Total views log. |
| **created_at** | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Submission timestamp. |
| **updated_at** | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Last modified timestamp. |
| **deleted_at** | TIMESTAMP | NULL | Soft deletion tracking timestamp. |

---

## 3. Indexes & Keys
* **Primary Key:** `id`
* **Foreign Key:** `user_id` -> `users(id)`
* **Unique Index:** `slug`
* **Composite Index:** `(listing_type, status)`
* **Spatial Index:** `location_coordinates`
