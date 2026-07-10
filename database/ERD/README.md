# HOYAMU.NET - Entity Relationship Diagram Mapping

මෙම ලේඛනය HOYAMU.NET හි දත්ත සමුදා වගු අතර පවතින සබඳතා (ERD Relationships) විස්තර කරයි.

---

## 1. Relationships Map

```
  +--------------+               +---------------+
  |    users     | 1 -------- N  |   listings    |
  +--------------+               +-------+-------+
         |                               |
         | 1                             | 1
         |                               |
         v 1                             v 1
  +--------------+               +---------------+
  |  businesses  |               |  categories   |
  +-------+------+               +---------------+
          |
          | 1
          v
  +--------------+
  |    jobs      | 1 -------- N  | applications  | (Job applicants N:1 jobs)
  +--------------+               +---------------+
```

### 1.1. Core System Connections
- **Users to Listings (1:N):** එක් පරිශීලකයෙකුට දැන්වීම් කිහිපයක් පළ කළ හැක.
- **Listings to Category (N:1):** දැන්වීම් කිහිපයක් එක් ප්‍රධාන කාණ්ඩයකට අයත් විය හැක.
- **Listings to Images (1:N):** එක් දැන්වීමකට පින්තූර කිහිපයක් තිබිය හැක.
- **Listings to Reviews (1:N):** එක් දැන්වීමක්/ව්‍යාපාරයක් සඳහා පරිශීලකයින් කිහිප දෙනෙකුට අදහස් (Reviews) පළ කළ හැක.
- **User to Business (1:1):** එක් Business Owner කෙනෙකුට ලියාපදිංචි කළ හැක්කේ එක් ප්‍රධාන ව්‍යාපාරික පිටුවක් (Directory meta page) පමණි.
- **Business to Jobs (1:N):** ව්‍යාපාරික ආයතනයකට රැකියා ඇබෑර්තු කිහිපයක් පළ කළ හැක.

---

## 2. Structural Schema Design Parameters
- **Primary keys:** Relational joins execute on high-performance integer keys (`BIGINT`).
- **Public lookups:** expose `UUIDv4` identifiers to client browsers.
- **Soft Deletion:** standard soft-deletion tracking updates `deleted_at` fields.
