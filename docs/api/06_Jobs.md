# HOYAMU.NET

**Document Name:** API Chapter 6 - Jobs API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 6: Jobs API

These endpoints manage the Careers and B2B Job Vacancy Portal.

---

## 6.1. Post Job Vacancy (රැකියා දැන්වීමක් පළ කිරීම)
* **Endpoint:** `POST /api/v1/jobs` (Authorization required)
* **Request Body:**
```json
{
  "title_en": "Senior PHP Developer",
  "company_name": "Hoyamu Software Systems",
  "location_district": "Colombo",
  "location_city": "Colombo 3",
  "description_en": "Hiring a senior PHP developer for Laravel projects.",
  "meta_data": {
    "job_type": "full-time",
    "salary_min": 150000.00,
    "salary_max": 250000.00,
    "experience_years": 4,
    "application_deadline": "2026-08-10"
  }
}
```
* **Response (201 Created):**
```json
{
  "success": true,
  "message": "Job listing posted successfully.",
  "job_uuid": "120e8400-e29b-41d4-a716-446655440099"
}
```

---

## 6.2. Submit Job Application (රැකියාවකට අයදුම් කිරීම)
* **Endpoint:** `POST /api/v1/jobs/{uuid}/apply` (Authorization required)
* **Request Body:**
```json
{
  "cover_letter": "I would love to apply for this role.",
  "cv_attachment_uuid": "880e8400-e29b-41d4-a716-4466554400aa"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Application submitted successfully."
}
```
