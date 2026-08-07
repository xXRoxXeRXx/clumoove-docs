---
id: initial-setup
title: Initial Setup & Admin Bootstrap
sidebar_position: 3
---

# Initial Setup & Admin Bootstrap

After fresh installation, Clumoove enters setup mode.

## 1. Initial Administrator Account

On first accessing the web UI (`http://localhost:3001`), Clumoove prompts you to create the initial administrator account.

- **Email**: Administrator email address
- **Password**: Minimum 12 characters with uppercase, lowercase, numbers, and symbols
- **Username**: Admin username

:::warning Permanent Lockout
Once created, the setup endpoint `/api/auth/setup-admin` is **permanently locked** (`403 Forbidden - SETUP_ALREADY_COMPLETED`). Additional users can only be created by an Admin under **Settings > User Management**.
:::

## 2. Enable Two-Factor Authentication (TOTP)

Admin accounts should immediately enable 2FA:
1. Navigate to **Profile & Security > 2FA Settings**.
2. Scan the QR code using an authenticator app (e.g. Google Authenticator, 2FAS, Bitwarden).
3. Verify with a 6-digit code and securely store the single-use **recovery backup codes**.

## 3. Configure Instance Email Server (SMTP)

To enable password resets, email change verifications, and user reports, the administrator should set up the system mailer:

1. Navigate to **Admin Settings > Email Server (SMTP)**.
2. Provide host, port (e.g. 587 or 465), credentials, sender address, and sender name.
3. Click **Test SMTP Connection**.
4. Once saved, settings are stored AES-256-GCM encrypted in the database.

:::note No .env Configuration
The email server is intentionally **not** configured via `SMTP_*` environment variables. It is managed dynamically and securely by administrators via the web interface.
:::

