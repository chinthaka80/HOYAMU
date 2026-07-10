# HOYAMU.NET - Database Table Schema: jobs

**Document:** Database Table Schema
**Table Name:** `jobs_meta`
**Version:** 1.0
**Project:** HOYAMU.NET

---

## 1. Table Description
Stores the specialized metadata for recruitment vacancies and job listings. Each record extends a listing of type `job`.

---

## 2. Columns Schema

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| **listing_id** | BIGINT | PRIMARY KEY, REFERENCES listings(id) ON DELETE CASCADE | Foreign key join to listings. |
| **company_name** | VARCHAR(255) | NOT NULL | Name of the hiring organization. |
| **job_type** | VARCHAR(50) | NOT NULL | Type: 'full-time', 'part-time', 'contract', 'remote'. |
| **salary_min** | NUMERIC(12,2) | NULL | Minimum salary limit (LKR). |
| **salary_max** | NUMERIC(12,2) | NULL | Maximum salary limit (LKR). |
| **experience_years** | INT | DEFAULT 0 | Required work experience in years. |
| **application_deadline** | DATE | NULL | Date limit for applying. |

---

## 3. Indexes & Keys
* **Primary Key:** `listing_id`
* **Foreign Key:** `listing_id` -> `listings(id)`
* **Index:** `job_type`
* **Index:** `application_deadline`
