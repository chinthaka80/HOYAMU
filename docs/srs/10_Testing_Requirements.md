# HOYAMU.NET

**Document Name:** SRS Chapter 10 - Testing Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 10: Testing & Quality Assurance

To ensure platform reliability, the development workflow must enforce comprehensive testing protocols before every release.

---

## 10.1. Automated Testing Frameworks

- **Unit Testing:** Written using **PHPUnit** (for backend API database logics, model behaviors, helper classes) and **Jest** (for frontend utility methods and React component states).
  * *Target coverage:* Minimum **80% code coverage** required for core modules.
- **Feature & Integration Testing:** Test API response flows using Laravel's HTTP test utilities. Test complete frontend routing paths using **Cypress** or **Playwright** integration scripts.

---

## 10.2. Performance & Security Testing

- **Load Testing:** Conduct load testing via **k6** or **JMeter** scripts. System capacity metrics must pass a threshold of 10,000 concurrent active search queries without database failure.
- **Security Audits:** Execute automated dependency audits (e.g. `npm audit`, `composer audit`) on every code commit. Perform monthly vulnerability checks (checking for OWASP Top 10 vulnerabilities like SQL injection and cross-site scripting).
- **UI / Visual Regression Testing:** Validate template responsiveness across multiple device viewport profiles. Ensure localized text strings in Sinhala and Tamil render correctly without overlapping layout elements.
