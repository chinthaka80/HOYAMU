# HOYAMU.NET

**Document Name:** Design System - Forms & Inputs

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Form & Input Specifications

This document defines the input variables, validation states, and helper text layouts for HOYAMU.net.

---

## 1. Input Field Standards

All text inputs, select boxes, and textareas must conform to the following specifications:
- **Height:** 44px (touch-friendly minimum height target).
- **Border Radius:** `12px` (Tailwinds `rounded-xl`).
- **Border Color:** Standard `#D1D5DB` (Gray-300).
- **Background:** White (`#FFFFFF`).
- **Placeholder Text:** Muted Gray (`#9CA3AF`) with a descriptive example (e.g., "e.g., Toyota Aqua 2018").

---

## 2. Validation States

Forms must provide clear visual feedback to guide users:

### 2.1. Default / Idle State
- Gray border (`#D1D5DB`). No icons.

### 2.2. Focus State
- Blue primary border outline (`#2563EB`) with a soft glow wrapper:
  `box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);`

### 2.3. Success State
- Green border (`#16A34A`). Checked green icon inside the input right-aligned.
- Success helper text below the field in green.

### 2.4. Error State
- Red border (`#DC2626`). Warning icon inside the input.
- Error helper text below the field in red (e.g. "email is invalid").

---

## 3. Form Rules

1. **Required Fields:** Mark clearly with a red asterisk next to the label (e.g., `email *`).
2. **Keyboard Traversal:** Ensure inputs are reachable using the `Tab` key in sequential order.
3. **Optimized Selects:** Dropdown lists containing more than 10 options (like Cities or Districts) must implement a search filter input within the dropdown.
4. **Helper Text:** Kept below the input, styled at **11px** size.
