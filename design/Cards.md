# HOYAMU.NET

**Document Name:** Design System - Cards

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Card Design Specifications

This document defines the layout grids and contents for cards on HOYAMU.net.

---

## 1. Card Layout Specifications

All cards share standard layout foundations:
- **Background:** White (`#FFFFFF`) with a gray border (`#E5E7EB`).
- **Border Radius:** `16px` corner radius (`rounded-2xl` in Tailwind).
- **Shadow:** Soft, natural drop shadow (`shadow-sm` or `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05)`).
- **Spacing Padding:** Standard padding of `16px` (`p-4`).

---

## 2. Specific Card Types

### 2.1. Classified Listing Card (Vehicles & Goods)
- **Top:** Image container (16:9 ratio, rounded corner).
- **Middle:** 
  * Header: Listing title (Semi-bold, 14px, maximum 2 lines text-overflow).
  * Metadata: Location icon + City, timestamp (11px, Muted Gray).
- **Bottom:** Price tag (Bold, 16px, Success Green) + Favorite button (Heart icon).

### 2.2. Yelp-Style Business Card
- **Layout:** Horizontal layout.
- **Left:** Business logo (Square 1:1 container, 80px width, rounded border).
- **Right:** 
  * Business name + Blue Verified Badge.
  * Rating widget (Yellow stars count + review counts).
  * Category slug + District.
  * Call action button ("View Profile").

### 2.3. Job Card (Careers Portal)
- **Header:** Job title (Bold, 15px) + Company Name.
- **Details:** Job type tag (e.g. Remote, Full-time) + Salary range (Success Green).
- **Footer:** Location + Date posted.

### 2.4. Property Card
- **Layout:** Vertical grid card.
- **Top:** Image banner with property type badge (e.g. "Land for sale").
- **Specs Row:** Grid showing icons for: Bedrooms, Bathrooms, size in Sqft or Perches.
- **Bottom:** Price tag + Price-per-perch calculator value (where applicable).
