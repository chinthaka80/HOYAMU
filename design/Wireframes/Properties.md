# HOYAMU.NET - Properties Portal Wireframe

**Viewport:** Desktop / Mobile Layout Map

---

## 1. Properties Portal Wireframe Drawing

```
+-----------------------------------------------------------------------+
|  [Logo]   [Search Box...]   [Categories v]   [Login]   [Post Ad]     | (Sticky Navbar)
+-----------------------------------------------------------------------+
|  Breadcrumbs: Home > Properties                                       |
+-----------------------------------------------------------------------+
|                                                                       |
|   PROPERTY SEARCH & REAL ESTATE PORTAL                                |
|                                                                       |
|   FILTERS (Sidebar)             PROPERTY LISTINGS (Col span 8)        |
|   +-----------------------+     Showing 1-10 of 45 property matches   |
|   | Property Type:        |                                           |
|   | [x] House             |     +-----------------------------------+ |
|   | [ ] Land              |     | 3 Bedroom Luxury House Colombo 3  | |
|   |                       |     | Colombo - LKR 28,000,000          | | (Property Card)
|   | Size (Perches):       |     | [3 Beds] [2 Baths] [12.5 Perches] | |
|   | Min [ 10 ]  Max [ 15 ]|     +-----------------------------------+ |
|   |                       |                                           |
|   | Price Range:          |     +-----------------------------------+ |
|   | Max LKR [ 30,000,000 ]|     | Modern Apartment Colombo 3        | |
|   |                       |     | Colombo - LKR 45,000,000          | |
|   | [ Apply Filters ]     |     | [3 Beds] [2 Baths] [1,200 Sqft]   | |
|   +-----------------------+     +-----------------------------------+ |
|                                 [ Pagination: Prev | 1 | 2 | Next ]   |
+-----------------------------------------------------------------------+
|  Links Grid  |  Copyright Logs  |  LankaPay Badge  |  Social Icons    | (Footer Banner)
+-----------------------------------------------------------------------+
```

---

## 2. Interaction Specifications
- **Perch-to-Sqft Converter:** Form inputs automatically calculate equivalent measurements on keyup events.
- **Mortgage Calculator:** Displayed inside listings detail sidebars, updating monthly interest estimates based on property cost.
- **Mobile optimization:** Sidebar collapses into a float filter trigger button.
