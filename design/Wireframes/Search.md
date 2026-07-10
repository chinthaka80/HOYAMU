# HOYAMU.NET - Search Page Wireframe

**Viewport:** Desktop / Mobile Layout Map

---

## 1. Search Page Wireframe Drawing

```
+-----------------------------------------------------------------------+
|  [Logo]   [Search Box...]   [Categories v]   [Login]   [Post Ad]     | (Sticky Navbar)
+-----------------------------------------------------------------------+
|  Breadcrumbs: Home > Search > "toyota"                                |
+-----------------------------------------------------------------------+
|                                                                       |
|   FILTERS (Sidebar)             SEARCH RESULTS (Col span 8)           |
|   +-----------------------+     Showing 1-20 of 250 matches for "toyota"|
|   | Category:             |                                           |
|   | [x] Vehicles          |     +-----------------------------------+ |
|   | [ ] Jobs              |     | Toyota Aqua S 2018                | |
|   |                       |     | Colombo - LKR 6,850,000           | | (Fuzzy match)
|   | District:             |     | [Automatic] [Hybrid] [45k mileage]| |
|   | [ Colombo v ]         |     +-----------------------------------+ |
|   |                       |                                           |
|   | Price Range:          |     +-----------------------------------+ |
|   | Min LKR [    ]        |     | Toyota Prius 2018                 | |
|   | Max LKR [    ]        |     | Colombo - LKR 7,500,000           | |
|   |                       |     | [Automatic] [Hybrid] [42k mileage]| |
|   | [ Apply Filters ]     |     +-----------------------------------+ |
|   +-----------------------+                                           |
|                                 [ Pagination: Prev | 1 | 2 | Next ]   |
+-----------------------------------------------------------------------+
|  Links Grid  |  Copyright Logs  |  LankaPay Badge  |  Social Icons    | (Footer Banner)
+-----------------------------------------------------------------------+
```

---

## 2. Interaction Specifications
- **Checkbox Toggle:** Triggers async API search updates without full-page reloads.
- **Sorting Dropdown (top right of results grid):** Sorts listings by Price (ascending/descending) or Latest date.
- **Mobile layout:** Sidebar collapses into a float filter trigger button.
