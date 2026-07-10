# HOYAMU.NET

**Document Name:** SRS Chapter 8 - Security Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 8: Security Requirements

## 8.1. Data & Transport Security
- **Transport Security:** All traffic must execute over HTTPS (TLS 1.3 protocol).
- **Data Encryption:** Passwords are encrypted using the **bcrypt** algorithm with a work factor of 10. Sensitive database fields (like API tokens) use AES-256 encryption.
- **CSRF & XSS Protections:** Next.js disables inline HTML parsing to prevent Cross-Site Scripting (XSS). Laravel middleware enforces CSRF validation tokens on all form submissions.

---

## 8.2. Request Protections & Firewalls
- **API Rate Limiting:** Prevent brute-force login cracking and DDoS attacks by enforcing a throttle limit:
  `Throttle: 60 requests per minute per IP address`
- **SMS OTP Rate Limiting:** SMS triggers are restricted to 1 SMS OTP request per phone number every 2 minutes (preventing SMS balance drainage).
- **Web Application Firewall (WAF):** Cloudflare WAF blocks known SQL Injection patterns, cross-origin scripting, and unauthorized bot crawlers.

---

## 8.3. Audit Trails & Access Management
- **Audit Trails:** Sensitive changes (such as merchant document approvals, admin modifications, or user terminations) must register audit logs tracking the actor user ID, dynamic edits, and transaction timestamps.
- **Two-Factor Authentication (2FA):** Mandatory 2FA verification (using Google Authenticator OTP seeds) for all Admin and Super Admin accounts.
