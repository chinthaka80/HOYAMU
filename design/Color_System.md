# HOYAMU.NET

**Document Name:** Design System - Color System

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Color System Specifications

This document defines the official color palette and visual rules for HOYAMU.net.

---

## 1. Color Palette Matrix

| Color Name | HEX Code | Usage Target |
| :--- | :--- | :--- |
| **Primary Orange** | `#E25704` | Main CTA buttons, active state indicators. |
| **Hover Orange** | `#C94D03` | Button hover transitions. |
| **Premium Gold** | `#D4AF37` | Gold membership items, featured listing highlights. |
| **Gold Light** | `#F0C75E` | Gold badge backgrounds. |
| **Accent Yellow** | `#FFC107` | Rating stars, search highlights. |
| **White** | `#FFFFFF` | Listing cards, modal overlays, main background panels. |
| **Background Gray** | `#FAFAFA` | Main body viewport background. |
| **Silver Gray** | `#F2F2F2` | Code block wrappers, table row alternates. |
| **Border Gray** | `#E5E7EB` | Soft borders (Tailwind `border-gray-200`). |
| **Slate Dark** | `#222222` | Body text, headers, primary buttons. |
| **Muted Gray** | `#6B7280` | Secondary descriptions, timestamps, help text. |
| **Success Green** | `#16A34A` | Prices, verification checks, success alerts. |
| **Danger Red** | `#DC2626` | Error alerts, delete triggers, warning flags. |
| **Info Blue** | `#2563EB` | Outbound external links, informative updates. |

---

## 2. Color Application Rules

1. **CTA Rule:** **Primary Orange** (`#E25704`) is restricted to main call-to-actions (e.g. "Post Ad", "Submit Apply"). Do not use it for passive buttons.
2. **Premium Rule:** **Gold** (`#D4AF37`) represents premium merchants. Verified businesses and sponsored listings utilize gold accents.
3. **Contrast Rule:** Body text must maintain a minimum contrast ratio of 4.5:1 against the light gray background, using **Slate Dark** (`#222222`) for maximum readability.
4. **Color Limit:** Never use more than 3 primary colors on a single page viewport.
