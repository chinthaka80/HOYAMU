# HOYAMU.NET

**Document Name:** Roadmap Chapter 2 - Sprint Planning

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Roadmap Chapter 2: Sprint Planning (කාලරාමු සැලැස්ම)

HOYAMU.NET utilizes an Agile development approach. Sprints are executed in 2-week iterations containing daily standups and code reviews.

---

## 2.1. Initial Sprint Schedule

```
                     [ 2-WEEK SPRINT CYCLE ]
                                |
       +------------------------+------------------------+
       |                                                 |
       v                                                 v
[ Sprint 1: Backend Core ]                       [ Sprint 2: Frontend Client ]
- Database migrations config                     - Next.js workspace setup
- Laravel Sanctum OAuth                          - Tailwind and design tokens
- User profile schemas                           - Home layout skeleton
       |                                                 |
       v                                                 v
[ Sprint 3: Listings Subsystem ]                 [ Sprint 4: Search & Geolocation ]
- Listings polymorphic controllers               - Meilisearch integration
- Image upload to Cloudflare R2                  - District dropdown components
- Categories classification trees                - Map search layouts
```

---

## 2.2. Sprint Rules & Governance
1. **Definition of Done (DoD):** A sprint task is flagged as Done only when it passes:
   * 100% linter and syntax checks.
   * Unit tests run without failures.
   * Pull request approved by developer review.
2. **Backlog Grooming:** Prioritize backlog items at the end of every sprint, moving critical tickets to the next sprint block.
