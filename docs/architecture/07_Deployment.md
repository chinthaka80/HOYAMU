# HOYAMU.NET

**Document Name:** Architecture Chapter 7 - Deployment Architecture

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 7: Deployment Architecture

## 7.1. Server Environment (Hetzner Cloud)

Production servers run on Ubuntu Server 22.04 LTS. The services are containerized using **Docker** and managed via **Docker Compose**:

```
                  [ Host Hetzner VPS ]
                           |
                  [ Nginx Reverse Proxy ]
                 /         |           \
                /          |            \
    [ Next.js Node ] [ Laravel API ] [ Meilisearch Node ]
```

---

## 7.2. Reverse Proxy & Domain Routing

**Nginx** acts as the primary reverse proxy, decrypting SSL certificates and routing requests:
- Requests to `hoyamu.net` proxy to port 3000 (Next.js server container).
- Requests to `api.hoyamu.net` proxy to port 8000 (Laravel backend API container).
- SSL certificates are generated and auto-renewed via Let's Encrypt Certbot cron jobs.

---

## 7.3. CI/CD Deployment Pipeline

Development uses **GitHub Actions** pipelines:
1. Code commits trigger automated unit testing (`PHPUnit`, `Jest`).
2. Code checks run static checks (Lints, PHPStan).
3. Docker images are built and pushed to a private Docker Registry.
4. SSH commands pull the updated images on the Hetzner server and restart containers automatically.
