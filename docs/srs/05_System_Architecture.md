# HOYAMU.NET

**Document Name:** SRS Chapter 5 - System Architecture

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 5: System Architecture & Topology

## 5.1. Platform Deployment Layout

The system employs a multi-tiered architecture that separates presentation, logic, search, and storage layers:

```
[ Next.js Frontend UI (SSR) ]  <-- (REST API over HTTPS) -->  [ Laravel 12 Backend API ]
            |                                                           |
  [ Cloudflare CDN & SSL ]                                              +-- [ PostgreSQL Primary ]
                                                                        +-- [ Redis Cache & Queues ]
                                                                        +-- [ Meilisearch Search ]
                                                                        +-- [ Cloudflare R2 Storage ]
```

---

## 5.2. Core Technology Stack Configuration

### 1. Presentation Layer (Next.js)
- Next.js v14/15 App Router using TypeScript.
- Server-Side Rendering (SSR) for crawlable listing landing pages.
- Tailwind CSS & shadcn/ui library for responsive layout design.

### 2. Business Logic Layer (Laravel 12)
- RESTful JSON API controllers.
- Spatie Role/Permission controls for RBAC enforcement.
- Laravel queues (Redis driver) processing emails, SMS alerts, and background AI processes.

### 3. Caching & Caching Infrastructure
- **Redis Cache:** Session state validation and API endpoint response caches.
- **Meilisearch:** Lightweight search cluster container for typo-tolerant index lookups.

### 4. Infrastructure & Security
- Dockerized containers deployed on Hetzner Cloud virtual private servers (VPS).
- Cloudflare CDN acting as Web Application Firewall (WAF) to prevent DDoS attacks.
