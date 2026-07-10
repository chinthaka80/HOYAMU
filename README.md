# HOYAMU.NET

## 🇱🇰 Sri Lanka's Digital Super Platform

**Tagline:** හොයන හැමදේම එකම තැන (Find Everything. One Place.)

---

## About

HOYAMU.NET is an enterprise-grade digital platform designed to become Sri Lanka's largest online ecosystem where people can search, discover, connect, buy, sell, advertise, and explore everything from one place.

The platform combines classified ads, business directories, jobs, properties, vehicles, marketplace, news, travel, services, and AI-powered search into one unified experience.

---

## Vision

To become Sri Lanka's most trusted and comprehensive digital platform, connecting people, businesses, services, and information through one intelligent ecosystem.

---

## Mission

Build a secure, scalable, innovative, and user-friendly platform that empowers individuals and businesses while making information easy to discover.

---

## Core Features

- ✅ **Classified Ads:** General consumer-to-consumer marketplace grids.
- ✅ **Property Listings:** Real estate portals with perch-to-sqft calculators.
- ✅ **Vehicle Marketplace:** Automotive details comparators.
- ✅ **Jobs Portal:** CV PDF builders and recruiter candidate dashboards.
- ✅ **Business Directory:** Yelp-style verified business profile landing pages.
- ✅ **Services Directory:** Local service provider indices.
- ✅ **Travel & Leisure:** Hotel directories, restaurant menus, and hospital locators.
- ✅ **Promotions & Deals:** Dynamic coupon codes and limited-time offer boards.
- ✅ **AI Search Engine:** Typo-tolerant instant search queries suggestions.
- ✅ **AI Recommendation:** Related listings and pricing advisor.
- ✅ **Security Shield:** Verified checkmark approvals and phone OTP validation.

---

## Technology Stack

- **Frontend:** Next.js (TypeScript, Tailwind CSS, shadcn/ui)
- **Backend:** Laravel 12 (RESTful JSON APIs)
- **Database:** PostgreSQL (v17+)
- **Cache & Session:** Redis
- **Search Engine:** Meilisearch container
- **Storage:** Cloudflare R2 object storage buckets
- **Infrastructure:** Ubuntu Server (Docker Compose, Nginx Reverse Proxy, Cloudflare WAF, Hetzner Cloud VPS)

---

## Architecture Flow

```
Next.js Frontend SSR Queries
            │
            ▼
 [ Cloudflare CDN & WAF ]
            │
            ▼
[ Nginx Reverse Proxy Server ]
            │
            ▼
[ Laravel 12 Backend API Gateway ]
   ├── Writes/Reads ──> [ PostgreSQL Primary DB ]
   ├── Cache Checks ──> [ Redis Cache & Queues ]
   └── Fuzzy Search ──> [ Meilisearch Container ]
```

---

## Project Status

- **Current Phase:** Planning & Documentation
- **Progress Metrics:**
  - 🟢 **Documentation:** Completed master structural specifications.
  - 🟡 **Design:** Layout styles mapping.
  - ⚪ **Backend Core:** Not Started.
  - ⚪ **Frontend Core:** Not Started.
  - ⚪ **Testing Pipeline:** Not Started.
  - ⚪ **Production Deployment:** Not Started.

---

## Repository Structure

```
HOYAMU/
├── README.md                           # Main index file
│
├── docs/                               # Master documentation
│   ├── srs/                            # Detailed SRS chapters
│   ├── proposal/                       # Investor business chapters
│   ├── architecture/                   # Technical systems designs
│   ├── 01_Project_Charter.md
│   ├── 02_Vision_Mission.md
│   ├── 03_Business_Proposal.md
│   ├── 04_Software_Requirements_Specification.md
│   ├── 05_Database_Design.md
│   ├── 06_System_Architecture.md
│   ├── 07_UI_UX_Guidelines.md
│   ├── 08_API_Documentation.md
│   └── 09_Development_Roadmap.md
│
├── design/                             # UI/UX design tokens guidelines
├── database/                           # DB schemas and migrations
│   └── schema/                         # Table DDL specs
├── backend/                            # Laravel API backend logic
└── frontend/                           # Next.js frontend pages
```

---

## Documentation Registry

| Document | Description | Reference Link |
| :--- | :--- | :--- |
| **01_Project_Charter** | Project founder metrics and targets. | [Project_Charter.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/01_Project_Charter.md) |
| **02_Vision_Mission** | Brand vision, mission and strategic targets. | [Vision_Mission.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/02_Vision_Mission.md) |
| **03_Business_Proposal** | Master Investor pitch deck and EBITDA cash flows. | [Business_Proposal.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/03_Business_Proposal.md) |
| **04_SRS** | Software Requirements specification chapters. | [Software_Requirements_Specification.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/04_Software_Requirements_Specification.md) |
| **05_Database_Design** | Database normalizations and tables blueprints. | [Database_Design.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/05_Database_Design.md) |
| **06_System_Architecture** | Technical decoupled systems topologies. | [System_Architecture.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/06_System_Architecture.md) |
| **07_UI_UX_Guidelines** | HDL visual tokens colors and typography. | [UI_UX_Guidelines.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/07_UI_UX_Guidelines.md) |
| **08_API_Documentation** | REST API endpoints contract definitions. | [API_Documentation.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/08_API_Documentation.md) |
| **09_Development_Roadmap** | Agile sprints schedule and timeline. | [Development_Roadmap.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/09_Development_Roadmap.md) |

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/hoyamu.net.git
cd hoyamu.net
```

### 2. Configure Backend Service
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### 3. Configure Frontend Client
```bash
cd frontend
npm install
npm run dev
```

---

## Coding Standards

- **Backend:** PHP PSR-12 code styling. SOLID coding design. Service-Repository separation pattern.
- **Frontend:** TypeScript, ESLint checking tools, Prettier formatting pipelines.
- **Git Flow:** Main branches `main` (production-ready) and `develop` (staging checks). Feature branches use `feature/*` formats.

---

## Security Shield

- Strict SSL over TLS 1.3.
- Bearer JWT token validations via Laravel Sanctum.
- CSRF validation tokens, XSS input filters, and SQL injection prevention.
- System activity audit logs.

---

## Performance & SEO Targets

- Google PageSpeed Insights Score: **>95**.
- Lighthouse Core Metrics: **>95**.
- Search Engine schema tags (JSON-LD JSON blocks).
- Dynamic robots.txt and hourly auto-regenerated XML Sitemaps.

---

## Contact & Team

- **Project Owner:**  (Founder, HOYAMU.NET)
- **Official Website:** [https://hoyamu.net](https://hoyamu.net)
- **Contact Email:** [info@hoyamu.net](mailto:info@hoyamu.net)

---

*Made with ❤️ in Sri Lanka*
