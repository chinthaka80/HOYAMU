# HOYAMU.NET

**Document Name:** SRS Chapter 2 - User Requirements & Roles

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 2: User Requirements & Roles

## 2.1. User Types (Roles Matrix)

The system enforces Role-Based Access Control (RBAC) to ensure that users access only authorized modules:

- **Guest:** Unauthenticated visitor. Can search listings, read articles, and view business profiles.
- **Registered User:** Logged-in individual. Can post free classified ads, message sellers, apply for jobs, and write reviews.
- **Business User:** Registered local merchant. Can configure a business profile, manage operating hours, and list promotions.
- **Verified Business:** Onboarded merchant with verified documents. Awarded the blue checkmark badge.
- **Moderator:** System manager reviewing pending listings and checking scam flags.
- **Admin / Super Admin:** Accesses all system modules, configurations, finance portals, and user permissions.

---

## 2.2. Permissions Matrix

| Permission Description | Guest | Registered User | Business User | Moderator | Super Admin |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Search and view listings** | Yes | Yes | Yes | Yes | Yes |
| **Post classified ads** | No | Yes (Limits apply) | Yes | Yes | Yes |
| **Create business profile** | No | No | Yes | Yes | Yes |
| **Apply for jobs / post CV** | No | Yes | No | Yes | Yes |
| **Post job vacancies** | No | No | Yes | Yes | Yes |
| **Approve listings** | No | No | No | Yes | Yes |
| **Manage user permissions / billing** | No | No | No | No | Yes |
| **Access AI moderator scores** | No | No | No | Yes | Yes |
