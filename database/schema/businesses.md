# HOYAMU.NET - Database Table Schema: businesses

**Document:** Database Table Schema
**Table Name:** `directory_meta` (referenced as `businesses` layout)
**Version:** 1.0
**Project:** HOYAMU.NET

---

## 1. Table Description
Stores the specialized metadata for Yelp-style directory pages. Each record extends a listing of type `directory`.

---

## 2. Columns Schema

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| **listing_id** | BIGINT | PRIMARY KEY, REFERENCES listings(id) ON DELETE CASCADE | Foreign key join to listings. |
| **business_name** | VARCHAR(255) | NOT NULL | Registered name of the local business. |
| **business_hours** | JSONB | NULL | JSON array containing opening schedules. |
| **website_url** | VARCHAR(255) | NULL | External business webpage link. |
| **logo_path** | VARCHAR(255) | NULL | Filepath link to business logo image. |
| **rating** | NUMERIC(2,1) | DEFAULT 0.0 | Weighted rating score (0.0 to 5.0). |
| **reviews_count** | INT | DEFAULT 0 | Count of reviews registered. |

---

## 3. JSONB Structure Example for business_hours:
```json
{
  "monday": "08:00-17:00",
  "tuesday": "08:00-17:00",
  "wednesday": "08:00-17:00",
  "thursday": "08:00-17:00",
  "friday": "08:00-17:00",
  "saturday": "09:00-13:00",
  "sunday": "closed"
}
```

---

## 4. Indexes & Keys
* **Primary Key:** `listing_id`
* **Foreign Key:** `listing_id` -> `listings(id)`
