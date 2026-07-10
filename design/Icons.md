# HOYAMU.NET

**Document Name:** Design System - Icons

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Icon Standards

This document defines the rules for utilizing icons across the HOYAMU.net platform.

---

## 1. Icon Library Enforcements

To prevent styling conflicts, developers must use icons exclusively from the following libraries:
- **Primary Library:** **Lucide Icons** (modern, clean, minimal).
- **Secondary Library:** **Heroicons** (used primarily for dashboard components and sidebar menus).

---

## 2. Icon Sizing Rules

Icons must conform to standard sizes to maintain visual balance on grid elements:

- **16px (Small):** Used inside buttons containing both text and icon, or next to captions (e.g. location tag, date indicator).
- **20px (Medium - Default):** Used for navigation triggers, listings card actions, and form inputs.
- **24px (Large):** Used for main category selections (e.g. vehicle, job, property header tabs).
- **32px+ (Hero):** Used in feature lists or on search empty state graphics.

---

## 3. Usage Best Practices

1. **Keep it Consistent:** Do not mix Lucide and FontAwesome icons on the same page.
2. **Stroke Width:** Maintain a default stroke width of `2px` for all Lucide icons to align with the typography weight.
3. **Muted Contrast:** Non-interactive indicators (like calendar symbols or location pins) must use **Muted Gray** (`#6B7280`) icons.
