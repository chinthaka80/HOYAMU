# HOYAMU.NET

**Document Name:** Design System - Reusable Components

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Reusable Components & Spacing Standards

This document defines the interface specifications, spacings, shadows, and tokens for common UI components on HOYAMU.net.

---

## 1. Grid & Spacing Standards
HOYAMU.NET uses a structured **4px-base spacing system**. Never apply arbitrary margin or padding values:
- `space-1` (4px): Small badge paddings.
- `space-2` (8px): Gaps between text and icons.
- `space-4` (16px): Card internal paddings.
- `space-6` (24px): Section grid gaps.
- `space-8` (32px): Vertical margins between content layout rows.

---

## 2. Border Radius Tokens
- **Interactive Triggers (Buttons/Inputs):** `12px` (`rounded-xl` in Tailwind) for easy finger-tapping.
- **Content Panels (Cards/Modals):** `16px` (`rounded-2xl` in Tailwind) for modern, soft visual layouts.
- **Avatar Icons:** `50%` (`rounded-full`) for circular thumbnails.

---

## 3. Shadow Elevation System
- **Flat Border (Default):** `border border-gray-200` with zero shadow.
- **Low Elevation (Cards):** Soft drop-shadow offset to lift cards off the background gray:
  `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);`
- **High Elevation (Modals/Dropdowns):** Pronounced shadow:
  `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);`

---

## 4. Reusable UI Components

### 4.1. Tables (දත්ත වගු)
- **Header Row:** Silver background (`#F2F2F2`), dark text (`#222222`), bold weight.
- **Row Alternations:** Alternate rows use white background and very light gray:
  Even rows: `#FFFFFF` | Odd rows: `#FAFAFA`
- **Border lines:** 1px horizontal separator line (`#E5E7EB`).

### 4.2. Alerts (නිවේදන)
Alert boxes span the width of the parent layout and use a `12px` border radius with left accent borders:
- **Success Alert:** Light green background, dark green text (`#16A34A`), success icon.
- **Danger Alert:** Light red background, dark red text (`#DC2626`), warning icon.
- **Info Alert:** Light blue background, dark blue text (`#2563EB`), info icon.

### 4.3. Badges (ලේබල)
Small rounded pill badges (`rounded-full`) used to display counts, roles, or verification states:
- **Verified Badge:** Premium Gold (`#D4AF37`) background, white text.
- **Category Badge:** Slate Dark (`#222222`) background, white text.

### 4.4. Pagination Grid (පිටු සැකසුම)
- **Active Page:** Primary Orange (`#E25704`) background, white text.
- **Inactive Page:** White background, Slate Dark (`#222222`) text with `#E5E7EB` borders. Hover switches background to `#FAFAFA` over **200ms**.
