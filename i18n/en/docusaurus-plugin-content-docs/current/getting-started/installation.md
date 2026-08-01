---
id: installation
title: Installation & Docker Compose
sidebar_position: 2
---

# Installation & Docker Compose

Clumoove is primarily deployed as a containerized Docker stack consisting of PostgreSQL, Redis, API gateway, migration workers, and the frontend SPA.

## Prerequisites

- **Docker** Engine >= 20.10 & **Docker Compose** v2
- Minimum **2 GB RAM** and **2 CPU cores**
- Network connectivity to source and target cloud storages

## 1. Clone Repository & Setup Environment

```bash
git clone https://github.com/xXRoxXeRXx/clumoove.git
cd clumoove
cp .env.example .env
```

## 2. Configure Environment Variables (`.env`)

Generate a random **32-byte Secret Key** for AES-256-GCM encryption of stored credentials:

```bash
# Generate random base64 key (Linux/macOS)
openssl rand -base64 32
```

Configure your `.env` file:

```env
# REQUIRED: AES-GCM Encryption Secret Key (32 Bytes)
ENCRYPTION_SECRET_KEY=YourGenerated32ByteBase64Key=

# REQUIRED: JWT Secret Key for user sessions
JWT_SECRET_KEY=YourSecondGenerated32ByteBase64Key=

# REQUIRED: Strong Redis Password
REDIS_PASSWORD=AStrongUniqueSecretPassword999!

# OPTIONAL: OAuth API Keys for Cloud Providers
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
ONEDRIVE_CLIENT_ID=
ONEDRIVE_CLIENT_SECRET=
DROPBOX_CLIENT_ID=
DROPBOX_CLIENT_SECRET=
HIDRIVE_CLIENT_ID=
HIDRIVE_CLIENT_SECRET=
```

:::danger Important Security Warning
The API server and worker **refuse to start** if `ENCRYPTION_SECRET_KEY` or `JWT_SECRET_KEY` is missing, shorter than 32 bytes, or identical.
:::

## 3. Start Containers

```bash
docker compose up -d
```

Access endpoints:
- **Clumoove Web App**: `http://localhost:3001`
- **API Backend**: `http://localhost:8001`
- **Documentation**: `http://localhost:8002`
