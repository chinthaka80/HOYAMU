# HOYAMU.NET

**Document Name:** Design System - Navbar Layouts

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Navbar Layout Specifications

This document defines the interface grids and contents of the main sticky site header.

---

## 1. Desktop Navbar Design

```
+-----------------------------------------------------------------------------------------+
| [ Logo ]  [ Search Listings Box... ]  [ Categories v ]  [ Language v ]  [ Login ] [Post Ad]|
+-----------------------------------------------------------------------------------------+
```

- **Sticky Behavior:** Stays fixed at the top of the viewport (`sticky top-0 z-50` with a blurred glass backdrop effect).
- **Primary Elements:**
  * **Logo:** Left-aligned.
  * **Fuzzy Search Box:** Centered with an embedded Lucide search icon.
  * **Categories Dropdown:** Hover-trigger grid showing main marketplace tabs.
  * **Login Button:** Styled in secondary white button format.
  * **Post Ad Button:** Styled in primary orange (`#E25704`) background with white text.

---

## 2. Mobile Navbar Design (Viewports < 768px)

- **Header Navbar:**
```
+------------------------------+
| [ Hamburger Menu ]  [ Logo ] |
+------------------------------+
```
- **Sticky Bottom Navigation Bar:** Fixed to the bottom of the device viewport for touch comfort:
```
+---------------------------------------------------+
| [ Home ]  [ Categories ]  [ Favorites ]  [ Profile ] |
+---------------------------------------------------+
```
- **Hamburger Drawer:** Slides out from the left edge containing secondary links (News, blog articles, support, settings).
- **Touch Target Padding:** Minimum button touch bounds set to 44px.
