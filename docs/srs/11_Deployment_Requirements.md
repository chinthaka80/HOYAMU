# HOYAMU.NET

**Document Name:** SRS Chapter 11 - Deployment Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 11: Deployment & Infrastructure Setup

This chapter details the server environments, pipelines, and configuration specifications for production deployment.

---

## 11.1. Host Server Specifications (Hetzner VPS)
- **Operation System:** Ubuntu Server 22.04 LTS (x86_64 architecture).
- **Virtualization:** Docker Engine and Docker Compose configurations containing container nodes:
  * `hoyamu-frontend` (Next.js server container)
  * `hoyamu-backend` (Laravel API container)
  * `hoyamu-database` (PostgreSQL service container)
  * `hoyamu-cache` (Redis database cache container)
  * `hoyamu-search` (Meilisearch engine container)

---

## 11.2. Reverse Proxy & Network Configuration
- **Nginx Web Server:** Acts as reverse proxy, directing traffic to Next.js or Laravel containers based on domain routing:
  * Domain `hoyamu.net` -> Proxied to frontend Next.js server container.
  * Domain `api.hoyamu.net` -> Proxied to Laravel backend container.
- **SSL Certificates:** Secured using Let's Encrypt certificates, managed and renewed automatically via Certbot cron jobs.

---

## 11.3. Continuous Integration & Deployment (CI/CD)
- **GitHub Actions Pipeline:** Triggered on main branch pushes:
  1. Executes unit tests (`composer test`, `npm run test`).
  2. Runs static code analysis (Lints, PHPStan checks).
  3. Builds Docker container images.
  4. deploys images to production VPS using SSH commands and pulls updated images automatically.
