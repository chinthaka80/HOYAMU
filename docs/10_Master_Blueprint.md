# HOYAMU.NET - Master Blueprint Document

**Document Version:** 1.0 (Official Release)

**Status:** Approved

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

**Ecosystem:** Sri Lanka's Digital Super Platform

---

# Executive Summary & Master Index

The **HOYAMU.NET Master Blueprint** is the unified technical and business specification for building Sri Lanka's largest digital super platform. This document indexes, organizes, and anchors all 19 development phases of the project, serving as the central handbook for software engineers, database architects, UX designers, investors, and AI coding agents.

---

## 🗺️ Master Roadmap Checklist (All 19 Phases)

### Phase 1: Project Foundation [Completed]
Established governance rules, repository files, vision and mission indices, proposal briefs, and software requirements specifications.
* Documentation Index: [01_Project_Charter.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/01_Project_Charter.md) & [02_Vision_Mission.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/02_Vision_Mission.md).

### Phase 2: Repository Setup [Completed]
Structured the repository workspace with 14 folders and configured automated GitHub Actions workflows.
* Backend Pipeline Config: [backend.yml](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/.github/workflows/backend.yml)
* Frontend Pipeline Config: [frontend.yml](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/.github/workflows/frontend.yml)

### Phase 3: UI/UX Design System [Completed]
Defined the brand guidelines, color system (HEX Orange `#E25704`, Gold `#D4AF37`), typography sizes, and spacing systems.
* Design Tokens Index: [07_UI_UX_Guidelines.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/07_UI_UX_Guidelines.md) & [Colors.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/design/Colors.md).

### Phase 4: Database Design [Completed]
Designed the relational PostgreSQL schemas using UUIDv4 lookups, composite search indexing, soft deletion trackers, and foreign keys.
* Schema Blueprints: [05_Database_Design.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/05_Database_Design.md) & [migrations/](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/backend/database/migrations/).

### Phase 5: Backend REST API Development [Completed]
Configured Laravel 12 workspace endpoints, Sanctum API authorizations, controllers logic, and models.
* Endpoints Catalog: [08_API_Documentation.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/08_API_Documentation.md) & [api.php](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/backend/routes/api.php).

### Phase 6: Frontend Development [Completed]
Initialized the Next.js client application with Tailwind CSS (v4), TypeScript, and shadcn/ui components.
* Homepage View: [page.tsx](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/frontend/app/page.tsx)
* Fuzzy Search page: [search/page.tsx](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/frontend/app/search/page.tsx)

### Phase 7: Authentication [Completed]
Created login, registration, password reset, and verification views using Zod schema constraints.
* Registration Page: [register/page.tsx](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/frontend/app/register/page.tsx)
* Login Page: [login/page.tsx](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/frontend/app/login/page.tsx)

### Phase 8: Core Business Modules [In Progress]
Developing specific portal layouts for the directory marketplace:
* **Business Directory [Completed]:** [business/page.tsx](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/frontend/app/business/page.tsx) & [business/[uuid]/page.tsx](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/frontend/app/business/[uuid]/page.tsx).
* **Location Database [Completed]:** Mapped in [LocationSeeder.php](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/backend/database/seeders/LocationSeeder.php) and [migrations/](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/backend/database/migrations/2026_07_10_000004_create_locations_tables.php).
* **Jobs Portal / Vehicles Marketplace / Properties Hub [Pending]:** Scheduled for future layouts updates.

### Phase 9: Search Engine (Meilisearch) [Pending]
Planned fuzzy lookup engines, auto-suggestions, and static map integrations.

### Phase 10: Monetization (Payments & Ads) [Pending]
PayHere and Genie merchant gateways integration mapping, invoice compilation, and subscription plans tiers (Free, Basic, Premium).

### Phase 11: Communication (Real-time Chat & Push) [Pending]
Sanctum user-to-seller messaging channels, SMS notifications, and device tracking logs.

### Phase 12: Artificial Intelligence (AI) [Pending]
Fuzzy prompt query detection, natural language description generation, and auto tagging features.

### Phase 13: Admin Dashboard Control Center [Pending]
Metrics trackers, spam review moderators queues, and site system settings sliders.

### Phase 14: SEO Optimizations [Pending]
Static breadcrumbs tracking, JSON-LD rich formatting scripts, and robots.txt rules.

### Phase 15: Analytics Tracking [Pending]
Conversion rate charts, organic user growth metrics, and top cities lookups.

### Phase 16: Automated Quality Assurance Tests [Pending]
Sanctum controller integrations tests and concurrent user load simulations.

### Phase 17: Production Server Deployment [Pending]
Ubuntu Server setup, Nginx reverse proxy mappings, Docker containers configuration, and daily backups.

### Phase 18: Launch Checklist [Pending]
Post-deployment checks, sitemap submissions, and live domain activations.

### Phase 19: Continuous Improvement Loop [Pending]
Bug fixes, AI optimizations, and Flutter mobile applications integrations.
