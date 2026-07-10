# HOYAMU.NET

**Document Name:** API Chapter 13 - Webhooks API

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# API Chapter 13: Webhooks & External Callbacks

These endpoints handle asynchronous notifications from external payment and listing networks.

---

## 13.1. Payment Gateway Callback (Stripe/LankaPay Webhook)
* **Endpoint:** `POST /api/v1/webhooks/payment`
* **Signature Verification Header:** `X-Hoyamu-Signature: hash_value`
* **Request Body Example:**
```json
{
  "event": "payment.succeeded",
  "transaction_id": "txn_892837492",
  "meta_data": {
    "user_uuid": "450e8400-e29b-41d4-a716-446655440000",
    "package_id": "premium_directory_monthly"
  },
  "amount_cents": 300000,
  "currency": "lkr"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Webhook processed. Package activated."
}
```

---

## 13.2. Bank Commission Lead Callback (affiliate Callback)
* **Endpoint:** `POST /api/v1/webhooks/commissions`
* **Request Body:**
```json
{
  "lead_uuid": "lead_992837kjd",
  "status": "approved",
  "payout_amount": 5000.00,
  "currency": "lkr"
}
```
* **Response (200 OK):**
```json
{
  "success": true,
  "message": "Commission payout registered."
}
```
*Note: All callback endpoints utilize cryptographic signatures (HMAC-SHA256) to verify that requests originate from authorized partners.*
