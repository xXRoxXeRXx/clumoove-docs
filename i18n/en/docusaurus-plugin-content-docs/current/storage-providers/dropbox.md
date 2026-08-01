---
id: dropbox
title: Dropbox Setup
sidebar_position: 5
---

# Dropbox Setup & OAuth App

Clumoove supports file migrations and sync jobs to and from Dropbox.

## Developer Setup: Create App in Dropbox App Console

### Step 1: Create Dropbox App
1. Open the [Dropbox App Console](https://www.dropbox.com/developers/apps).
2. Click **Create app**.
3. Choose **Scoped access**.
4. Access Type: **Full Dropbox**.
5. App Name: `Clumoove-Migration-[YourID]`.
6. Click **Create App**.

### Step 2: Permissions (Scopes)
Under **Permissions**, enable:
- `files.metadata.read`
- `files.metadata.write`
- `files.content.read`
- `files.content.write`
- `account_info.read`

Click **Submit**.

### Step 3: Redirect URI & Keys
1. Under **Settings > OAuth 2 > Redirect URIs**, add `http://localhost:8001/api/oauth/callback`.
2. Copy **App key** and **App secret**.

### Step 4: Environment Variables

```env
DROPBOX_CLIENT_ID=your-app-key
DROPBOX_CLIENT_SECRET=your-app-secret
```
