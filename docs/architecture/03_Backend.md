# HOYAMU.NET

**Document Name:** Architecture Chapter 3 - Backend Architecture

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 3: Backend Architecture

## 3.1. Design Pattern: Controllers-Services-Repositories

The Laravel backend implements a clean separation of concerns:
- **Routes:** Decodes URL queries and passes them to Controllers.
- **Controllers:** Handle HTTP validations, parse inputs, and call Services.
- **Services:** Execute core business logic (e.g. processing bank commissions, calling AI translation APIs).
- **Repositories:** Abstract raw SQL query operations, communicating directly with Eloquent Models.
- **Policies & Gates:** Enforce Role-Based Access Control (RBAC).

---

## 3.2. Folder Structure Diagram

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/          # API Controllers
│   │   ├── Middleware/           # Rate-limiting, authentication guards
│   │   └── Requests/             # Form validators (Zod counterpart)
│   │
│   ├── Services/                 # Business logic services
│   ├── Repositories/             # Database access abstractions
│   ├── Models/                   # Eloquent Models (User, Listing, Meta)
│   ├── Policies/                 # RBAC policies
│   └── Jobs/                     # Queue workers (emails, background tasks)
│
└── routes/
    ├── api.php                   # Secure API endpoints
    └── web.php                   # Utility routes
```

---

## 3.3. Job Queues & Background Workers
Heavy tasks like image resizing, multi-lingual translations, and notification dispatches are offloaded to background workers using **Laravel Queue** powered by Redis drivers.
