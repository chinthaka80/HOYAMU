# HOYAMU.NET

**Document Name:** SRS Chapter 9 - UI/UX Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 9: UI/UX Requirements

## 9.1. Design Aesthetics & Visual Identity

The interface must project a premium, state-of-the-art visual experience:

- **Style:** Pure white card layers with soft drop shadows and rounded borders (`border-radius: 12px;` or Tailwinds `rounded-xl`).
- **Color Palette:**
  * **Primary Blue:** `#2563EB`
  * **Secondary Slate:** `#0F172A`
  * **CTA Orange:** `#F59E0B`
  * **Success Green:** `#22C55E`
- **Typography:**
  * English text: `Inter` sans-serif font family.
  * Sinhala text: `Noto Sans Sinhala` font family.
  * Tamil text: `Noto Sans Tamil` font family.

---

## 9.2. Layout Configurations

- **Mobile-First Grids:** Viewports below 768px must collapse listings into a single-column layout, optimizing touch points and scrollability.
- **Dark Mode Support:** Provide smooth transitions between light and dark modes. Dark layouts will use slate `#0F172A` backgrounds with `#F8FAFC` light text.
- **Accessibility Integration:** HTML structures must comply with WCAG 2.1 AA contrast requirements. All interactive elements must maintain clear focus ring visibility indicators during keyboard tab selections.
