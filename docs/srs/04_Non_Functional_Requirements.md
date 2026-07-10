# HOYAMU.NET

**Document Name:** SRS Chapter 4 - Non-Functional Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 4: Non-Functional Requirements

This chapter details the performance, scalability, security, and quality compliance metrics required.

---

## 4.1. Availability & Reliability
- **System Uptime:** Minimum target uptime of **99.9%** (excluding planned monthly maintenance windows).
- **Database Backup:** automated daily incremental database snapshots and weekly complete database exports (stored in encrypted off-site Cloudflare R2 backup drives).
- **Failover Plan:** Setup database replica fallback configurations for immediate service recovery during server crashes.

---

## 4.2. Performance & Latency
- **API Response Target:** Average database API response times must be **under 200 milliseconds** for standard calls.
- **Page Load Time:** First Contentful Paint (FCP) must resolve under **1.5 seconds** on A4-grade connections.
- **Search Latency:** Meilisearch queries must execute within **50 milliseconds**.

---

## 4.3. Scalability
- **Capacity Limits:** System architecture must support **50,000 concurrent active sessions** without performance degradation.
- **Horizontal Scaling:** API controllers and Next.js frontend pages are containerized with Docker, allowing horizontal node scaling.
- **Caching Offset:** Redis clusters cache frequent database queries (offloading up to 70% of raw PostgreSQL table reads).

---

## 4.4. Accessibility & UI Compliance
- **Responsive Web Design:** Templates must render properly across desktop (1920px+), tablet (768px-1024px), and mobile (320px-480px) viewports.
- **WCAG Standards:** Support for screen-readers, proper image `alt` attributes, and contrast ratios conforming to WCAG 2.1 AA specifications.
- **Localized Encoding:** Database tables and API feeds must enforce UTF-8 configurations to guarantee Sinhala and Tamil characters render correctly.
