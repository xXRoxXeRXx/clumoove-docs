---
id: nextcloud
title: Nextcloud & WebDAV
sidebar_position: 2
---

# Nextcloud Setup & Configuration

Nextcloud is natively supported for file migrations, calendars (CalDAV), and contacts (CardDAV).

## Prerequisites

- A running Nextcloud instance (Self-hosted or Cloud provider).
- A dedicated **App Password** (never use your main account password).

## 1. Create App Password in Nextcloud

1. Log into your Nextcloud instance.
2. Click your **Profile Picture > Personal Settings**.
3. Select **Security** in the left sidebar.
4. Scroll to **Devices & sessions** (App Passwords).
5. Enter a name (e.g. `Clumoove Migration`) and click **Create new app password**.
6. Copy the displayed username and generated app password.

## 2. Add Connection in Clumoove

In Clumoove, open **Add Connection** (`ConnectForm`) and select **Nextcloud**:

| Form Field | Description | Example |
|---|---|---|
| **Server URL** | Full Nextcloud instance URL | `https://cloud.example.com` |
| **Username** | Nextcloud username | `admin` |
| **Password** | Generated **App Password** | `xxxx-xxxx-xxxx-xxxx` |

## Supported Resource Types
- **Files**: Full directory tree & file streaming.
- **Calendars**: CalDAV VCALENDAR entries.
- **Contacts**: CardDAV VCARD contact cards.
