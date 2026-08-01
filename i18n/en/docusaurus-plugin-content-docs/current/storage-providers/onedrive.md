---
id: onedrive
title: OneDrive Personal Setup
sidebar_position: 4
---

# OneDrive Personal

Clumoove supports file migration and synchronization for **personal Microsoft accounts** (OneDrive Personal).

:::info Note
OneDrive work/school accounts (SharePoint / Microsoft 365 Work & School) and shared items (`Shared with me`) are out of scope for V1. Supported scope is restricted to the personal account owner's directory hierarchy.
:::

## Developer Setup: Azure / Microsoft Entra App Registration

### Step 1: Register App in Azure Portal
1. Open the [Microsoft Entra Admin Center (Azure Portal)](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade).
2. Click **New registration**.
3. Name: `Clumoove Migration`.
4. Supported account types: **Personal Microsoft accounts only**.
5. Redirect URI (Web): `http://localhost:8001/api/oauth/callback`.
6. Click **Register**.

### Step 2: Generate Client Secret
1. Go to **Certificates & secrets**.
2. Click **New client secret**.
3. Copy the generated secret **Value** immediately.

### Step 3: API Permissions (Scopes)
Under **API permissions**, enable delegated scopes:
- `Files.ReadWrite`
- `offline_access`
- `User.Read`

### Step 4: Environment Variables

```env
ONEDRIVE_CLIENT_ID=your-application-client-id
ONEDRIVE_CLIENT_SECRET=your-client-secret-value
```
