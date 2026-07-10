# HOYAMU.NET

**Document Name:** Design System - Buttons

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Button Style Specifications

This document defines the classes, paddings, and hover transitions for all buttons on HOYAMU.net.

---

## 1. Button Variants Matrix

| Variant | Background Color | Text Color | Border Color | Typical Application |
| :--- | :--- | :--- | :--- | :--- |
| **Primary CTA** | `#E25704` (Orange)| `#FFFFFF` | None | Main actions (e.g. "Post Ad", "Apply Now"). |
| **Secondary** | `#FFFFFF` (White) | `#0F172A` | `#E5E7EB` | Secondary triggers (e.g. "Filter", "Cancel"). |
| **Premium** | `#D4AF37` (Gold)  | `#FFFFFF` | None | Premium memberships and promotions. |
| **Danger** | `#DC2626` (Red)   | `#FFFFFF` | None | destructive actions (e.g. "Delete Ad", "Ban"). |
| **Disabled** | `#F3F4F6` (Gray)  | `#9CA3AF` | None | Incomplete forms state. |

---

## 2. Padding & Border Radius Rules

- **Standard Button Height:** 44px (touch-friendly minimum height target).
- **Padding:** `py-3 px-6` (12px top/bottom, 24px left/right).
- **Border Radius:** `12px` (Tailwinds `rounded-xl` or CSS `border-radius: 12px;`).
- **Typography Weight:** Medium (500) font weight.

---

## 3. Interaction & Animation Rules

1. **Hover Scale Transition:** Hovering over primary/secondary buttons triggers a soft background color transition over **200 milliseconds** (`duration-200 ease-in-out`):
   - Primary: `#E25704` transition -> `#C94D03`.
   - Secondary: White background transition -> `#F9FAFB`.
2. **Disabled State:** Disabled buttons must set `pointer-events: none;` and trigger zero animations.
3. **No Heavy Shadows:** Buttons utilize a very light drop-shadow offset to align with the flat minimal design guidelines.
