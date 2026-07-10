# HOYAMU.NET - Admin Dashboard Wireframe

**Viewport:** Desktop / Mobile Layout Map

---

## 1. Admin Dashboard Wireframe Drawing

```
+-----------------------------------------------------------------------+
|  [Logo]   [Search Box...]   [Categories v]   [Login]   [Post Ad]     | (Sticky Navbar)
+-----------------------------------------------------------------------+
|  Breadcrumbs: Home > Admin Dashboard                                  |
+-----------------------------------------------------------------------+
|                                                                       |
|   ADMIN NAVIGATION (Left)       PENDING MODERATION LIST (Col span 8)  |
|   +-----------------------+     Showing 3 pending listings            |
|   | [x] Dashboard         |                                           |
|   | [ Users Manager ]     |     1. Toyota Prius 2018                  |
|   | [ Moderation Queue ]  |        Posted by: Nuwan | Scam Score: 4%  |
|   | [ Reports & Logs ]    |        [ View details ] [Approve] [Reject]| (Moderation Queue)
|   | [ Settings ]          |                                           |
|   +-----------------------+     2. Land Kurunegala                    |
|                                       Posted by: Sunil | Scam Score: 12% |
|                                       [ View details ] [Approve] [Reject]|
|                                                                       |
+-----------------------------------------------------------------------+
|  Links Grid  |  Copyright Logs  |  LankaPay Badge  |  Social Icons    | (Footer Banner)
+-----------------------------------------------------------------------+
```

---

## 2. Interaction Specifications
- **Approve Click:** Approves the listing, sends notification alerts, and updates database status code asynchronously.
- **Reject Click:** Opens rejection feedback popup dialog detailing rejection comments input fields.
- **Scam Score Rating:** Flags suspicious postings automatically.
