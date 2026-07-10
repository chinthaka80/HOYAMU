# HOYAMU.NET - Database Table Schema: vehicles

**Document:** Database Table Schema
**Table Name:** `vehicles_meta`
**Version:** 1.0
**Project:** HOYAMU.NET

---

## 1. Table Description
Stores the specialized metadata for vehicle and machinery listings. Each record extends a listing of type `vehicle`.

---

## 2. Columns Schema

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| **listing_id** | BIGINT | PRIMARY KEY, REFERENCES listings(id) ON DELETE CASCADE | Foreign key join to listings. |
| **vehicle_make** | VARCHAR(100) | NOT NULL | Brand/manufacturer (e.g. Toyota, Nissan). |
| **vehicle_model** | VARCHAR(100) | NOT NULL | specific model (e.g. Aqua, Leaf). |
| **model_year** | INT | NOT NULL | Manufacturing year. |
| **mileage_km** | INT | NOT NULL | Total mileage in kilometers. |
| **transmission** | VARCHAR(50) | NOT NULL | Options: 'automatic', 'manual', 'triptronic'. |
| **fuel_type** | VARCHAR(50) | NOT NULL | Options: 'petrol', 'diesel', 'hybrid', 'electric'. |
| **engine_capacity_cc** | INT | NULL | Engine displacement in cubic centimeters. |

---

## 3. Indexes & Keys
* **Primary Key:** `listing_id`
* **Foreign Key:** `listing_id` -> `listings(id)`
* **Composite Index:** `(vehicle_make, vehicle_model)` (optimized for search dropdowns)
* **Index:** `model_year`
* **Index:** `fuel_type`
