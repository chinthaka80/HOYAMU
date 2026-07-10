# HOYAMU.NET

**Document Name:** Roadmap Chapter 1 - Project Phases

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Roadmap Chapter 1: Project Phases (අදියරයන්)

The software development lifecycle is divided into 10 key phases:

---

## 1.1. Phase 1 to 5: Core Engineering

### Phase 1 – Planning (සැලසුම්කරණය)
- **Tasks:** Establish the project charter, vision/mission, business proposal, database design schemas, system topology, UI/UX specifications, and REST API documentation.
- **Deliverable:** [HOYAMU Official Specification Suite](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/README.md).

### Phase 2 – UI/UX Design System
- **Tasks:** Build 3D vector logo assets, brand color system, poppins typography weights, responsive grids, and high-fidelity Figma templates for desktop and mobile viewports.
- **Deliverable:** Hoyamu UI Design System Figma File.

### Phase 3 – Backend Core API
- **Tasks:** Configure Laravel 12 project directory, setup PostgreSQL tables, RBAC permissions seeds, and write controllers, services, and repositories for auth, users, categories, listings, reviews, and favorites.
- **Deliverable:** Decoupled RESTful API gateway.

### Phase 4 – Frontend Client Application
- **Tasks:** Setup Next.js App Router workspace, configure tailwind variables, build reusable card grids, forms components, navigation bars, and connect API services.
- **Deliverable:** SSR responsive website.

### Phase 5 – Specialized Sub-Portals
- **Tasks:** Build properties unit converters, vehicle comparison grids, job PDF CV builders, and news blog managers.
- **Deliverable:** Marketplace modules.

---

## 1.2. Phase 6 to 10: Monetization & Launch

### Phase 6 – Monetization Pipeline
- **Tasks:** Payment gateway callbacks, premium featured ads logic, discount vouchers system, and transaction billing dashboards.

### Phase 7 – AI Integrations
- **Tasks:** AI translation queue workers, auto-description content generators, and scam score estimation classification models.

### Phase 8 – Production Optimization
- **Tasks:** Redis API caching, SEO meta tag validation, gzip compression, and image lazy loading tests.

### Phase 9 – Testing & Quality Assurance
- **Tasks:** PHPUnit database checks, Playwright UI regressions, and k6 load tests.

### Phase 10 – Deployment & Release
- **Tasks:** Ubuntu Server configurations, Docker Compose builds, and Cloudflare CDN proxy launches.
