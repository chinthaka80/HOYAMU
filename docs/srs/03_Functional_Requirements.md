# HOYAMU.NET

**Document Name:** SRS Chapter 3 - Functional Requirements

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# SRS Chapter 3: Functional Requirements

This chapter details the functional specifications for the core platform subsystems.

---

## 3.1. Authentication & Session Module
- **Registration & Login:** Users register using name, email, password, and phone number. Session validation is verified using **Laravel Sanctum (bearer tokens)**.
- **Social Login:** OAuth2 integrations for Google, Facebook, and Apple sign-ups.
- **Phone Verification:** SMS gateway OTP verifies phone numbers during ad submissions.
- **Password Recovery:** Email reset tokens with a 1-hour expiry.

---

## 3.2. Unified Search Module (Meilisearch)
- **Instant Search:** Fuzzy matching for typo variations on listing titles and tags.
- **Location Filter:** Radius query filtering (e.g. within 10km of Colombo 3) based on lat/lng points.
- **Multi-category Results Page:** Single query returns matching listings classified by type (e.g. search "repair" shows garages, mechanics, tools for sale).

---

## 3.3. Job Portal Module
- **CV Builder:** Generates a clean PDF CV based on input fields (education, skills, work history).
- **Vacancies Board:** Employers post vacancies with details (job type, salary bounds, qualifications).
- **Application Portal:** Registered users apply to vacancies with a single click. Applications are flagged inside the recruiter's dashboard.

---

## 3.4. Property & Vehicle Modules
- **Perch-to-Sqft Converter:** Automatic unit updates on landing forms.
- **Home Loan Interest Calculator:** Displays estimated monthly mortgage interest based on listing cost.
- **Vehicle Comparator:** Grid table comparing specifications of up to three models.

---

## 3.5. Yelp-Style Business Directory
- **Verified Seal Approval:** Admin dashboard upload checks verification credentials (business registration documents).
- **Review Rating Engine:** Weighted averages calculations for verified check-in user feedback.
- **Hours & Maps:** Dynamic indicators: "Open Now", "Closing Soon" based on business JSON hours data.
