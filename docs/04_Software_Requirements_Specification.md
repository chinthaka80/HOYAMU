# HOYAMU.NET

**Document Name:** Software Requirements Specification (SRS) Master Index

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Software Requirements Specification (SRS) - Master Index

This is the Master Index for the HOYAMU.NET Software Requirements Specification (SRS). The document has been organized into modular chapters following industry-standard IEEE 830 and ISO/IEC/IEEE 29148 templates.

---

## 📄 Documentation Chapters Index

Click on the links below to access the detailed technical requirements for each area:

1. **[01_Introduction.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/01_Introduction.md):** System Overview, Purpose of Document, and Scope of the HOYAMU.NET Ecosystem.
2. **[02_User_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/02_User_Requirements.md):** User Profiles, Roles (Guests, Registrants, Verified Merchants, Admins), and Permissions Matrix.
3. **[03_Functional_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/03_Functional_Requirements.md):** Core Features, Auth pipelines, Listings CRUD, Jobs, Properties, Vehicles, Yelp-style directory, and AI engines.
4. **[04_Non_Functional_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/04_Non_Functional_Requirements.md):** Performance, Availability (99.9%), Latency, Scalability, and Accessibility compliance.
5. **[05_System_Architecture.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/05_System_Architecture.md):** Production Tech Stack, Decoupled Next.js Frontend / Laravel 12 Backend API Topology.
6. **[06_Database_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/06_Database_Requirements.md):** PostgreSQL Normalization standards, Primary/Foreign keys, Indexing, and Soft deletions.
7. **[07_API_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/07_API_Requirements.md):** RESTful JSON standards, Bearer Token authentication headers, Pagination, and Filters parameters.
8. **[08_Security_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/08_Security_Requirements.md):** TLS 1.3 Transport, bcrypt hashing, CSRF/XSS mitigations, Rate limits, WAF, and 2FA features.
9. **[09_UI_UX_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/09_UI_UX_Requirements.md):** Visual Identity specifications (Rounded corners, Soft shadows, Primary/CTA color palettes), Typography, and Dark Mode transitions.
10. **[10_Testing_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/10_Testing_Requirements.md):** Automated Testing pipelines (PHPUnit/Jest), Load testing capacity, and Security audit targets.
11. **[11_Deployment_Requirements.md](file:///C:/Users/User/.gemini/antigravity/scratch/HOYAMU/docs/srs/11_Deployment_Requirements.md):** Ubuntu Server configuration, Docker container topology, Nginx reverse-proxy setup, and CI/CD pipelines.

---

## 🛠 Project Structure Preview

```
HOYAMU/docs/
├── 04_Software_Requirements_Specification.md   # This Master Index
└── srs/
    ├── 01_Introduction.md
    ├── 02_User_Requirements.md
    ├── 03_Functional_Requirements.md
    ├── 04_Non_Functional_Requirements.md
    ├── 05_System_Architecture.md
    ├── 06_Database_Requirements.md
    ├── 07_API_Requirements.md
    ├── 08_Security_Requirements.md
    ├── 09_UI_UX_Requirements.md
    ├── 10_Testing_Requirements.md
    └── 11_Deployment_Requirements.md
```

This modular layout makes it easy to update individual specification blocks without creating massive document merge conflicts, and allows engineers to refer to their relevant implementation scopes.
