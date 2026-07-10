# HOYAMU.NET

**Document Name:** Roadmap Chapter 6 - Release & Deployment Plan

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Roadmap Chapter 6: Release & Deployment Plan

To minimize downtime and ensure seamless updates, HOYAMU.NET uses a structured multi-environment release strategy.

---

## 6.1. Environment Structure

The code and deployment workflow progress through three distinct server environments:

```
[ Local Development ] (Developer PC, Docker Desktop)
          │
          ▼
[ Staging / Test Env ] (Hetzner VPS Sandbox, Staging domain)
          │
          ▼
[ Production Live Environment ] (Hetzner VPS Primary, Production domain)
```

1. **Local Environment:** Developers run dockerized containers locally to code features and execute local unit tests.
2. **Staging Environment:** Code merges to the `develop` branch, triggering a GitHub Action that deploys containers to a staging sandbox domain (e.g. `staging.hoyamu.net`). Here, visual regressions, loading speeds, and integration components are verified.
3. **Production Environment:** Once staging tests pass, code merges to the `main` branch, triggering automated zero-downtime deployment pipelines that update the live domain (`hoyamu.net`).

---

## 6.2. Post-Release Validation Checklist
Immediately after a release is deployed, DevOps developers must run the following checks:
- Verify HTTPS certificates resolve correctly over all subdomains.
- Run database health diagnostics (checking PostgreSQL connection pools status).
- Run mock payment transaction tests to verify Stripe callbacks.
- Check Redis queue handlers logs to ensure background tasks are processing.
