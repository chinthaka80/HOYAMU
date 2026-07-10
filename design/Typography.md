# HOYAMU.NET

**Document Name:** Design System - Typography

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Typography Specifications

This document defines the fonts, hierarchy scales, and language rendering rules for HOYAMU.net.

---

## 1. Font Families

HOYAMU.NET enforces specific font configurations to support bilingual Sinhala, Tamil, and English layout grids:
- **English Font:** `'Poppins', 'Inter', sans-serif`
- **Sinhala Font:** `'Noto Sans Sinhala', sans-serif`
- **Tamil Font:** `'Noto Sans Tamil', sans-serif`

---

## 2. Text Hierarchy Scale

| Selector | Size (Desktop) | Weight | Line Height | Description |
| :--- | :--- | :--- | :--- | :--- |
| **H1 (Page Title)** | 28px (1.75rem) | Bold (700) | 1.3 | Main landing page titles. |
| **H2 (Section Header)** | 20px (1.25rem) | Semi-Bold (600) | 1.4 | Module section headings. |
| **H3 (Sub-Header)** | 16px (1rem) | Medium (500) | 1.4 | Listing card titles. |
| **Body (Main Text)** | 14px (0.875rem)| Regular (400) | 1.5 | Main body copy, details text. |
| **Caption (Small Text)** | 11px (0.68rem) | Regular (400) | 1.4 | Timestamps, cities, muted tags. |
| **Button Text** | 14px (0.875rem)| Medium (500) | 1.2 | Navigation and CTA buttons. |

---

## 3. Typography Rules

1. **Line-height Constraints:** Body copy must maintain a `line-height` parameter of `1.5` to guarantee Sinhala loops and Tamil characters do not overlap vertically.
2. **Font Weights:** Do not use random weights. Stick strictly to **400** (Regular), **500** (Medium), **600** (Semi-Bold), and **700** (Bold).
3. **Responsive Scaling:** On viewports below 640px (mobile), H1 titles scale down automatically to **22px** (1.375rem) using tailwind responsiveness: `text-xl md:text-3xl`.
