# HOYAMU.NET

**Document Name:** Roadmap Chapter 7 - Post-Launch Strategy

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Roadmap Chapter 7: Post-Launch Strategy (දියත් කිරීමෙන් පසු)

Launching the platform is only the first step. To ensure long-term growth and technical stability, post-launch operations must prioritize optimization, SEO scaling, and system health.

---

## 7.1. SEO Optimization & Content Ingestion Loops

To capture high volumes of intent-rich local search queries on Google:
- **SEO Blog Articles:** Publish 5–10 weekly articles targeting local transactional keywords (e.g. "how to register business Kurunegala", "Prius fuel efficiency tips Sri Lanka").
- **Google Search Console Indexing:** Enforce daily checks on canonical URLs indexing to ensure search crawlers index new job and property listings instantly.
- **Sitemap Generation:** Enforce cron jobs to automatically regenerate XML sitemaps hourly.

---

## 7.2. System Health & Performance Monitoring

- **Error Monitoring (Sentry/LogRocket):** Automatically log uncaught exceptions on frontend and backend engines, notifying the developer team during critical spikes.
- **Database Optimization (Postgres Vacuum):** Weekly autovacuum operations and database tables optimization grids validation to maintain query speed as listings volume grows.
- **Infrastructure Audits:** Monthly audits of Hetzner VPS resource usage (RAM, CPU thresholds) to determine when scaling is required.
- **Customer Satisfaction Metrics:** Monitor user reviews and support feedback to optimize listing workflows and filters.
