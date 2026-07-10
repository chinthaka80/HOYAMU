# HOYAMU.NET

**Document Name:** Chapter 19 - Risk Analysis

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Chapter 19: Risk Analysis & Mitigation Matrix

Every tech startup faces operational, market, and technical risks. Below is the structured risk mitigation plan for HOYAMU.NET.

---

## 19.1. Risk Assessment Table

| Risk Category | Threat Probability / Severity | Potential Impact | Mitigation & Protection Strategy |
| :--- | :--- | :--- | :--- |
| **Market Competition** | High / Medium | Price wars with legacy portals (e.g. Ikman dropping pricing). | Focus heavily on organic SEO traffic routing to minimize user acquisition cost. Position as a unified Super App instead of a single classifieds niche. |
| **Merchant Adoption Friction** | Medium / Medium | Non-technical local business owners failing to register. | Launch a **WhatsApp Listing Assistant**: merchants text images and details to a verified business number, and our backoffice publishes the listings. |
| **Cybersecurity & Data Theft** | Low / High | Customer database leaks, spam bots, or DDoS attack crashes. | Implement secure API token validation via Laravel Sanctum. Run all traffic behind Cloudflare WAF. Encrypt user passwords using bcrypt. Weekly database backups to Cloudflare R2 storage. |
| **Infrastructure Scalability** | Low / Medium | Server crashes during marketing campaigns or traffic spikes. | Dockerize the Next.js frontend and Laravel backend. Set up Redis database cache to offload database query operations. Set up alerts for automated scaling. |
| **Regulatory & Compliance** | Medium / Low | Local listing regulation violations (e.g. fraudulent medical listings). | Strict moderation rules. Verified blue checkmarks require documentation uploads. Automated moderation checkers for restricted keywords. |

---

## 19.2. Incident Response Guidelines

In the event of a system breach or hardware failure:
1. **Database Failover:** PostgreSQL read-replica handles failover queries while the primary server recovers.
2. **Cloudflare WAF Under Attack Mode:** Activated immediately during targeted DDoS attacks to filter bad bot traffic.
3. **Data Recovery Protocol:** Daily database backups stored offsite allow data restoration with a maximum 24-hour data loss window.
