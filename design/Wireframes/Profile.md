# HOYAMU.NET - User Profile Settings Wireframe

**Viewport:** Desktop / Mobile Layout Map

---

## 1. User Profile Settings Wireframe Drawing

```
+-----------------------------------------------------------------------+
|  [Logo]   [Search Box...]   [Categories v]   [Login]   [Post Ad]     | (Sticky Navbar)
+-----------------------------------------------------------------------+
|  Breadcrumbs: Home > Dashboard > Profile Settings                     |
+-----------------------------------------------------------------------+
|                                                                       |
|   DASHBOARD NAVIGATION (Left)   PROFILE SETTINGS PANEL (Col span 8)   |
|   +-----------------------+     Update Personal Information           |
|   | [ Dashboard ]         |                                           |
|   | [ Active Listings ]   |     Full Name:                            |
|   | [x] Profile Settings  |     [ Chinthaka Nuwan                 ]   | (Form Input)
|   | [ Logout ]            |                                           |
|   +-----------------------+     email Address:                        |
|                                 [ chinthaka@hoyamu.net            ]   |
|                                                                       |
|                                 Phone Number (for OTP):               |
|                                 [ 0771234567                      ]   |
|                                                                       |
|                                 [ Save Changes ]                      | (CTA Button)
|                                                                       |
+-----------------------------------------------------------------------+
|  Links Grid  |  Copyright Logs  |  LankaPay Badge  |  Social Icons    | (Footer Banner)
+-----------------------------------------------------------------------+
```

---

## 2. Interaction Specifications
- **Save Changes Click:** Validates inputs via Zod constraints schema and posts payload to update profile API, showing success toast notification.
- **Menu Items Hover:** Highlights active selection in standard brand blue background colors.
