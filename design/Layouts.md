# HOYAMU.NET

**Document Name:** Design System - Page Layouts

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Page Layout Standards

This document defines the container widths, grid rules, and layouts structure for HOYAMU.net.

---

## 1. Grid & Container Specifications

To align layouts correctly across large viewports:
- **Maximum Width Container:** The main content wrapper is restricted to **1280px** (`container mx-auto px-4` in Tailwind).
- **Desktop Grid:** Enforces a **12-column grid layout** (`grid grid-cols-12 gap-6`).
- **Tablet Grid:** Enforces a **8-column grid layout**.
- **Mobile Grid:** Enforces a **4-column grid layout** (collapsing sidebars).

---

## 2. Standard Page Hierarchy

Every page layout follows a strict vertical structure to maintain consistency:

```
[ Sticky Navbar Header ]
           │
[ Breadcrumb Navigation ]
           │
[ Dynamic Title Banner ]
           │
[ Page Main Layout (Grid) ]
   ├── Content Area (Col span 8 on desktop)
   └── Sidebar Area (Col span 4 on desktop)
           │
[ Global Page Footer ]
```

- **Sidebar Rules:** The sidebar contains context-specific panels (e.g. ad filters, merchant contact cards, related job vacancies). If the page does not require a sidebar, the main content area spans all 12 columns.
- **Breadcrumb Rules:** Included on all pages except the homepage to assist users with navigation.
- **Footer Specifications:** Divided into 4 columns containing site maps, legal warnings, payment gateway badges, and social media channels links.
