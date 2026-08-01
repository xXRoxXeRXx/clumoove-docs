---
id: google-drive
title: Google Drive Setup
sidebar_position: 3
---

# Google Drive (Workspace & Personal)

Clumoove supports Google Drive for files, Google Calendar, and Google Contacts.

## Developer Setup: Create OAuth 2.0 Credentials in GCP

### Step 1: Create a Project in Google Cloud Console
1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Click **Select a Project > New Project**.
3. Name it `Clumoove Migration` and click **Create**.

### Step 2: Enable Required APIs
Navigate to **APIs & Services > Library** and enable:
- **Google Drive API**
- **Google Calendar API**
- **People API** (for contacts)

### Step 3: Configure OAuth Consent Screen
1. Go to **APIs & Services > OAuth consent screen**.
2. Select **External** (or Internal for Workspace) and click **Create**.
3. Enter App name (`Clumoove`) and support email.
4. Add the following **Scopes**:
   - `https://www.googleapis.com/auth/drive.file`
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/contacts`

### Step 4: Create OAuth Client ID
1. Go to **APIs & Services > Credentials**.
2. Click **Create Credentials > OAuth client ID**.
3. Application type: **Web application**.
4. Authorized Redirect URIs:
   `http://localhost:8001/api/oauth/callback` (or your domain `https://your-domain.com/api/oauth/callback`).
5. Copy the **Client ID** and **Client Secret**.

### Step 5: Configure Environment Variables

```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-client-secret
```
