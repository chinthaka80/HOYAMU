# HOYAMU.NET

**Document Name:** Architecture Chapter 8 - AI Core Architecture

**Version:** 1.0

**Status:** Draft

**Last Updated:** 2026-07-10

**Prepared By:** Chinthaka Nuwan

**Project:** HOYAMU.NET

---

# Architecture Chapter 8: AI Core Architecture

## 8.1. AI Translation Logic

HOYAMU.NET ensures multi-lingual accessibility by integrating a background translation worker:

```
[ User posts Ad in Sinhala ] ---> [ Saved to database (listings) ]
                                                |
                                    [ Dispatch Laravel Job ]
                                                |
                                     (Queue: Redis worker)
                                                |
                                                v
                                    [ Call DeepL/Google API ]
                                                |
                                    +-----------+-----------+
                                    |                       |
                                    v                       v
                         [ Translate to English ] [ Translate to Tamil ]
                                    |                       |
                                    +-----------+-----------+
                                                |
                                     [ Save translation back ]
                                                |
                                     [ Sync to Meilisearch ]
```

---

## 8.2. Smart Content Generation & Verification

- **AI Ad Assistant:** When a user uploads a photo, the image is passed to a Vision API to generate suggested titles, category classifications, and keyword tags.
- **Scam Score Estimator:** incoming listing parameters (price deviation, IP region, keywords) are analyzed by a local classification model to output a scam probability score (listings with high scores are held for manual moderation).
- **Auto Image Moderation:** User photos are passed through an AI moderation check (e.g. Google Cloud Vision API) to block explicit or inappropriate content instantly.
