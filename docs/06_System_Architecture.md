# HOYAMU.NET

**Document Name:** System Architecture Master Index

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

**Architecture Version:** Enterprise v1

---

# System Architecture Master Index

This is the Master Index for HOYAMU.NET's technical system architecture design. The documentation has been organized into modular chapters located inside the [docs/architecture/](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/) folder.

---

## 📄 System Architecture Chapters Index

Click on the links below to access the detailed design specifications for each subsystem:

1. **[01_Overview.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/01_Overview.md):** Architecture Vision, Design Principles, and Overall System Topology Diagram.
2. **[02_Frontend.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/02_Frontend.md):** Next.js App Router layout mapping, reusable components, and client/server rendering boundaries.
3. **[03_Backend.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/03_Backend.md):** Laravel 12 API Controllers, Repositories, Policies, and Redis background queues integration.
4. **[04_Database.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/04_Database.md):** PostgreSQL primary/replica connection topology, UUIDv4 routing, and constraints.
5. **[05_API.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/05_API.md):** RESTful JSON design standards, endpoints routing, and pagination/filtering parameters.
6. **[06_Security.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/06_Security.md):** TLS 1.3 Transport, bcrypt hashing, CSRF/XSS block middleware, rate-limiting, and Cloudflare WAF.
7. **[07_Deployment.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/07_Deployment.md):** Hetzner Cloud Ubuntu installation, Docker containerization orchestration, Nginx reverse proxies, and CI/CD pipelines.
8. **[08_AI_Architecture.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/08_AI_Architecture.md):** AI Translation queues workflow, auto-moderation vision, and pricing analytics.
9. **[09_Scalability.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/architecture/09_Scalability.md):** HAProxy Load Balancing, PostgreSQL partitioning, Redis caches, and backup/restore RTO protocols.

---

## 🛠 Project Architecture Folder Structure

```
HOYAMU/docs/
├── 06_System_Architecture.md      # This Master Index
└── architecture/
    ├── 01_Overview.md
    ├── 02_Frontend.md
    ├── 03_Backend.md
    ├── 04_Database.md
    ├── 05_API.md
    ├── 06_Security.md
    ├── 07_Deployment.md
    ├── 08_AI_Architecture.md
    └── 09_Scalability.md
```

This modular topology guarantees that team developers, database administrators, and DevOps deployment engineers can work and update technical document segments independently.
