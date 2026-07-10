# HOYAMU.NET

**Document Name:** Architecture Chapter 6 - Security Blueprint

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 6: Security Blueprint

## 6.1. Network & Threat Protection

HOYAMU.NET secures user data and maintains system availability using multiple defense layers:

- **HTTPS Enforcements:** All network queries run over TLS 1.3. Secure HTTP headers (`X-Frame-Options`, `X-Content-Type-Options`, `Content-Security-Policy`) prevent clickjacking and mime sniffing.
- **DDoS Shield (Cloudflare CDN):** Cloudflare proxies hide raw IP addresses of Hetzner servers, automatically mitigating layer-7 DDoS attacks.
- **Web Application Firewall (WAF):** Blocks malformed SQL Injection requests and cross-site scripting attempts before they hit the API.

---

## 6.2. Code & Database Security

- **Encryption:** Passwords use **bcrypt** hashing (work factor 10). Sanctum keys are encrypted in PostgreSQL.
- **CSRF & XSS Protections:** Next.js automatically sanitizes inputs to block cross-site scripting. Laravel API middleware blocks Cross-Site Request Forgery.
- **Rate Limiting:** Capped at 60 requests per minute per IP address. SMS OTP triggers are limited to 1 request per number every 2 minutes.
- **2FA Management:** Admin access requires Google Authenticator OTP keys.
