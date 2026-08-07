---
id: index
title: Supported Storage Providers
sidebar_position: 1
---

# Supported Storage Providers

Clumoove supports a wide variety of cloud storages, protocols, and local network shares.

## Capability Matrix

| Provider | Type | OAuth | Files | Calendars | Contacts | Atomic Overwrite |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **Nextcloud** | Cloud / Self-Host | ❌ (App Password) | ✅ | ✅ | ✅ | ✅ |
| **Google Drive** | Cloud | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OneDrive Personal** | Cloud | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Dropbox** | Cloud | ✅ | ✅ | ❌ | ❌ | ✅ |
| **STRATO HiDrive** | Cloud | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Telekom MagentaCLOUD** | Cloud | ❌ (WebDAV) | ✅ | ❌ | ❌ | ✅ |
| **AWS S3 / MinIO** | Object Storage | ❌ (Access Key) | ✅ | ❌ | ❌ | ✅ |
| **Immich** | Photos / Media | ❌ (API Key) | ✅ (Photos/Videos) | ❌ | ❌ | ❌ (Virtual) |
| **WebDAV** | Standard Protocol | ❌ (Basic Auth) | ✅ | ❌ | ❌ | ✅ |
| **SMB / SFTP** | Network Share | ❌ (SSH/SMB Auth) | ✅ | ❌ | ❌ | ✅ |
| **FTPS / FTP** | Network Share | ❌ (FTP/TLS Auth) | ✅ | ❌ | ❌ | ✅ |
| **Local Storage** | Local Path | ❌ | ✅ | ❌ | ❌ | ✅ |
