# HOYAMU.NET

**Document Name:** Design System - Responsive Design

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Responsive Design Specifications

This document defines the breakpoints and UI behaviors for mobile, tablet, and desktop viewports on HOYAMU.net.

---

## 1. Breakpoint Tokens

HOYAMU.NET utilizes the standard Tailwind CSS breakpoint tokens:

- **Mobile (sm):** `640px` (Optimizes single column grids).
- **Tablet (md):** `768px` (Sidebar collapses into bottom drawer panels).
- **Laptop (lg):** `1024px` (Enforces standard grid layouts).
- **Desktop (xl):** `1280px` (Limits container width bounds).
- **Large Desktop (2xl):** `1536px` (Increases margins).

---

## 2. Mobile-First Navigation

Because over 80% of Sri Lankan traffic originates from mobile devices, the mobile UX utilizes specific navigation structures:
- **Bottom Navigation Bar:** A sticky bottom navigation bar is active on viewports below 768px. It contains 4 main action triggers:
  1. Home (magnifying search icon)
  2. Categories (grid icon)
  3. Saved Items (heart icon)
  4. User Profile (account icon)
- **Sticky Search Box:** Search inputs remain sticky at the top of listings views to allow quick keyword adjustments.
- **Hamburger Menu:** Secondary links (blog, contact, privacy policies) are grouped inside a slide-out hamburger menu drawer.
- **Touch Targets:** All buttons, filters, and input fields on mobile must have a minimum height of **44px** and a spacing buffer of at least 8px to prevent accidental taps.
