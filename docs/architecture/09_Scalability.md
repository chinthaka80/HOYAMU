# HOYAMU.NET

**Document Name:** Architecture Chapter 9 - Scalability & Disaster Recovery

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 9: Scalability & Disaster Recovery

## 9.1. Horizontal Scalability Roadmap

To support millions of active users, HOYAMU.NET's architecture scales horizontally:

- **Load Balancer (HAProxy / Nginx):** Distributes incoming traffic across multiple Next.js and Laravel container nodes.
- **Database Partitioning:** As the `listings` table exceeds 1,000,000 records, PostgreSQL list partitioning is implemented based on district regions (e.g. `listings_colombo`, `listings_kandy`).
- **Redis Query Caching:** Popular lookup tables (cities, categories, featured listings) are cached in Redis memory nodes to reduce raw database reads.

---

## 9.2. Disaster Recovery Protocol

- **Backup Frequency:**
  * **Database:** Hourly incremental transaction logs + Daily full snapshots.
  * **Media Files:** Daily replication to a secondary Cloudflare R2 backup bucket in a different geographic region.
- **Restore Testing:** Automated monthly sandbox restore tests verify backup integrity.
- **Server Recovery Target:** Maximum Recovery Time Objective (RTO) is 2 hours; Recovery Point Objective (RPO) is 1 hour.
