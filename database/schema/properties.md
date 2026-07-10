# HOYAMU.NET - Database Table Schema: properties

**Document:** Database Table Schema
**Table Name:** `properties_meta`
**Version:** 1.0
**Project:** HOYAMU.NET

---

## 1. Table Description
Stores the specialized metadata for property and land listings. Each record extends a listing of type `property`.

---

## 2. Columns Schema

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| **listing_id** | BIGINT | PRIMARY KEY, REFERENCES listings(id) ON DELETE CASCADE | Foreign key join to listings. |
| **property_type** | VARCHAR(50) | NOT NULL | Type: 'land', 'house', 'apartment', 'commercial'. |
| **size_sqft** | INT | NULL | Size of the property in square feet. |
| **size_perches** | NUMERIC(10,2) | NULL | Size of the land in perches. |
| **bedrooms** | INT | NULL | Number of bedrooms (where applicable). |
| **bathrooms** | INT | NULL | Number of bathrooms (where applicable). |
| **is_negotiable** | BOOLEAN | DEFAULT TRUE | Price negotiation indicator. |

---

## 3. Indexes & Keys
* **Primary Key:** `listing_id`
* **Foreign Key:** `listing_id` -> `listings(id)`
* **Index:** `property_type` (for listing filter queries)
* **Index:** `size_perches` (for land listing range searches)
