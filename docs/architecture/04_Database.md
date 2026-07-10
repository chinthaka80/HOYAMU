# HOYAMU.NET

**Document Name:** Architecture Chapter 4 - Database Topology

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 4: Database Topology & Integrity

## 4.1. PostgreSQL Topology

The database layer utilizes **PostgreSQL** to guarantee ACID transactions. In a high-traffic environment, query load is distributed using read-replicas:

```
               [ Laravel 12 Backend API ]
                /                      \
      (Write Queries)              (Read Queries)
              /                          \
             v                            v
  [ PostgreSQL Primary ]  --- Replication --->  [ PostgreSQL Replica ]
```

---

## 4.2. Schema Design Rules

- **UUID for Public Routing:** User-facing queries lookup records via `UUIDv4` hashes (e.g. `GET /users/550e8400-e29b-41d4-a716-446655440000`). Database joins continue using fast numeric primary keys (`BIGINT`).
- **Soft Deletion Middlewares:** Prevents physical deletions. Deleting a record updates a `deleted_at` timestamp.
- **Foreign Key Constraints:** Relational joins enforce strict indexing and `ON DELETE CASCADE` parameters to prevent orphaned child tables.
- **Spatial Indexing:** Geographic radius lookups (map pins) use PostgreSQL Point coordinate objects.
