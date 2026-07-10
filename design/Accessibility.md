# HOYAMU.NET

**Document Name:** Design System - Accessibility

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** 

**Project:** HOYAMU.NET

---

# Accessibility Guidelines (WCAG 2.1 AA)

This document defines the accessibility standards required to ensure HOYAMU.net is usable by all individuals, including those with visual or motor impairments.

---

## 1. Core Compliance Rules

All page viewports must conform to Web Content Accessibility Guidelines (WCAG) 2.1 AA standards:

- **Contrast Ratios:** Text must maintain a minimum contrast ratio of **4.5:1** against backgrounds (3:1 for large headers). Avoid light-gray text on white backgrounds.
- **Alt Text:** Every image element must define an `alt` attribute. Muted decorative graphics must define empty alt attributes (`alt=""`) to prevent screen-readers from reading file paths.
- **Focus Rings:** Interactive elements (buttons, inputs, links) must display a clear, high-contrast focus ring (e.g. blue outline border) during keyboard tab focus actions.
- **ARIA Attributes:** Non-standard interactive panels (like search autocomplete dropdowns or dialog grids) must implement appropriate ARIA roles (e.g. `aria-expanded`, `aria-label`).

---

## 2. Multi-lingual Accessibility

- **Font Loops:** Sinhala (`Noto Sans Sinhala`) and Tamil (`Noto Sans Tamil`) characters require adequate line heights (`line-height: 1.6`) to prevent script loops from clipping.
- **HTML lang Attribute:** The HTML element must dynamically update the language attribute based on user settings:
  * English: `<html lang="en">`
  * Sinhala: `<html lang="si">`
  * Tamil: `<html lang="ta">`
- **UTF-8 Encoding:** All templates enforce UTF-8 charsets to guarantee local language characters render correctly.
