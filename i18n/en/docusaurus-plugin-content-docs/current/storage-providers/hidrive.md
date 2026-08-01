---
id: hidrive
title: STRATO HiDrive Setup
sidebar_position: 6
---

# STRATO HiDrive Setup

STRATO HiDrive is supported via its REST API over OAuth 2.0.

## Developer Setup

1. Open the [STRATO HiDrive Developer Portal](https://dev.hidrive.strato.com/).
2. Register a new app under **My Apps > Register New App**.
3. Set Redirect URI to `http://localhost:8001/api/oauth/callback`.
4. Set Scopes: `role_user`, `rw`.
5. Copy **Client ID** and **Client Secret**.

```env
HIDRIVE_CLIENT_ID=your-client-id
HIDRIVE_CLIENT_SECRET=your-client-secret
```
