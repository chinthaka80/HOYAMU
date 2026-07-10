# HOYAMU.NET

**Document Name:** Roadmap Chapter 5 - Risk Management

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Roadmap Chapter 5: Risk Management (අවදානම් කළමනාකරණය)

## 5.1. Common Project Risks & Mitigations

1. **Scope Creep (අධික ලෙස ව්‍යාපෘතිය පුළුල් වීම):**
   - *Risk:* Adding too many marketplace features (e.g. adding e-commerce checkout to classified listings) before launch, delaying release dates.
   - *Mitigation:* strict focus on the **Phase 1 MVP**. Additional features are logged in the backlog for post-launch releases.
2. **Budget Overruns (අයවැය සීමාවන් ඉක්මවා යාම):**
   - *Risk:* Exceeding the LKR 25M funding limit due to infrastructure scaling errors or developer overhead.
   - *Mitigation:* Enforce strict monthly capital controls (OPEX capped at LKR 700k/month in Year 1). Dockerize components to run on cost-effective Hetzner servers.
3. **Unexpected Technical Roadblocks:**
   - *Risk:* Integrations failures (e.g. LankaPay API gateway updates, SMS OTP connection latency).
   - *Mitigation:* Create mock adapter classes. If LankaPay changes, the core application controllers remain intact.
4. **Data Corruption & Data Loss:**
   - *Risk:* Database corruption during migrations.
   - *Mitigation:* automated daily incremental database snapshots and weekly complete database exports (stored in off-site Cloudflare R2 backup drives).
