---
id: index
title: Overview & Introduction
sidebar_position: 1
slug: /
---

# Welcome to Clumoove Documentation

**Clumoove** is a self-hosted, open-source platform for high-performance cloud migrations, two-way synchronizations, and automated backups across diverse storage providers (Nextcloud, S3, Google Drive, OneDrive Personal, Dropbox, HiDrive, Immich, WebDAV, SMB/SFTP, and local storage).

:::note Key Features
- **Multi-Provider Support**: Seamless migrations between cloud and on-premise storages.
- **Durable Transfer Queue**: Resilient PostgreSQL-backed queue (`SKIP LOCKED`).
- **Cryptographic Hash Verification**: 3-way checksum verification (SHA-1, MD5, SHA-256) post-migration.
- **High Security**: End-to-end AES-256-GCM credential encryption, SSRF guards & 2FA/TOTP support.
:::

## Quick Navigation

- [🚀 Installation via Docker Compose](./installation.md)
- [⚙️ Initial Admin Setup](./initial-setup.md)
- [🔌 Connect Storage Providers](../storage-providers/index.md)
- [🔄 Single Migrations & Sync Jobs](../features-and-usage/single-migrations.md)
- [💡 Troubleshooting & Error Codes](../troubleshooting/common-errors.md)
