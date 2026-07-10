# HOYAMU.NET

**Document Name:** Design System - Motion & Animation

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Motion & Animation Standards

This document defines the rules for animations and transitions across the HOYAMU.net interface.

---

## 1. Animation Principles

Animations on HOYAMU.NET must be **subtle, purposeful, and lightweight**. Avoid excessive or flashy transitions that distract users or cause latency:
- **No Long Transitions:** The maximum duration for standard UI transitions is capped at **200 milliseconds** (`duration-200` in Tailwind).
- **Use Ease-In-Out:** Enforce natural transition easing models (`ease-in-out`) rather than linear step shifts.
- **Respect User Preferences:** Support the `prefers-reduced-motion` CSS media query, disabling animations automatically for users who have configured reduced motion settings in their operating system.

---

## 2. Standard Transition Behaviors

### 2.1. Button Hover Transitions
- Background and border transitions must ease smoothly over **200ms**:
  `transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;`

### 2.2. Page Loading Transitions
- Use skeleton loaders rather than full-page spinning icons. Skeleton components display a soft pulsing fade animation:
  `@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }`

### 2.3. Modal Overlay Transitions
- Modal dialogues fade in smoothly, while the content box scales up slightly:
  `transform: scale(0.95); opacity: 0; transition: transform 0.2s ease-out, opacity 0.2s ease-out;`
- Active State:
  `transform: scale(1); opacity: 1;`
