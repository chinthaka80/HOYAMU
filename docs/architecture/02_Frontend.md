# HOYAMU.NET

**Document Name:** Architecture Chapter 2 - Frontend Architecture

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 2: Frontend Architecture

## 2.1. Next.js App Router Setup

The frontend layer is engineered using **Next.js (v14/15)** to optimize search engine crawling and page load speed:
- **Server-Side Rendering (SSR):** Used on listings details and search results pages to fetch data on the server, injecting meta schemas before returning HTML to users.
- **Client-Side Rendering (CSR):** Used for interactive dashboard charts, chat widgets, and form validators.

---

## 2.2. Folder Structure Diagram

```
frontend/
├── app/                          # App Router Pages & Routes
│   ├── layout.tsx                # Root layout containing global styles
│   ├── page.tsx                  # Homepage
│   ├── search/                   # Instant search results
│   ├── jobs/                     # Careers subpages
│   ├── property/                 # Real estate subpages
│   └── dashboard/                # User dashboard
│
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui buttons, inputs, dialogs
│   ├── search-bar.tsx            # Global search input
│   └── listing-card.tsx          # Card layouts
│
├── services/                     # API fetch integration wrappers
├── hooks/                        # Custom React Hooks
├── types/                        # TypeScript interface templates
└── utils/                        # Formatting and coordinate converters
```

---

## 2.3. Design Integration
The layout interfaces are styled using **Tailwind CSS** and components from **shadcn/ui**. Responsive grid configurations collapse desktop layouts into mobile-first screens seamlessly.
