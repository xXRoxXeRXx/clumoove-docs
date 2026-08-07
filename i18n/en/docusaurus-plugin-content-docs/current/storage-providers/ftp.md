---
id: ftp
title: FTPS & FTP Network Storage
sidebar_position: 11
---

# FTPS & FTP Network Storage

Clumoove supports file migrations and synchronizations to and from **FTPS servers** (FTP over TLS/SSL).

:::warning Encrypted FTPS Connections Only
For security reasons, Clumoove **exclusively supports encrypted FTPS connections** (explicit or implicit TLS). Plain unencrypted FTP without TLS is strictly rejected.
:::

## Supported Connection Types

1. **Explicit TLS (FTP-ES / FTPS)**:
   - **URL Format**: `ftp://host:21?tls=explicit` (or custom port, e.g., `ftp://sftp.example.com:2121?tls=explicit`)
   - **Behavior**: Establishes a standard FTP control channel and upgrades immediately to TLS encryption via `AUTH TLS`.
2. **Implicit TLS (FTPS)**:
   - **URL Format**: `ftps://host:990` (or custom port, e.g., `ftps://sftp.example.com:990`)
   - **Behavior**: The connection is encrypted with TLS starting from the first byte.

## Connection Settings in Clumoove

Select **Add Connection > FTPS / FTP**:

| Form Field | Description | Example |
|---|---|---|
| **Server URL** | Full FTPS URL including protocol and TLS parameter | `ftp://ftp.example.com:21?tls=explicit` or `ftps://ftp.example.com:990` |
| **Username** | FTP username | `ftpuser` |
| **Password** | FTP password | `••••••••` |

---

## Security & Networking Features

- **Egress Dialer & Anti DNS-Rebinding**: Passive data channels (PASV / EPSV) strictly dial the validated host name on the announced port to prevent DNS rebinding attacks.
- **TLS Certificate Verification**: TLS handshakes enforce TLS 1.2+ and use server SNI verification against the configured domain.
- **Integrity Verification**: As FTP provides no standardized portable hashing method, verification after upload falls back to **file size comparison** (`VerificationSizeOnly`).
- **Atomic Overwrites**: Under the `OVERWRITE` strategy, files are uploaded to temporary files first and then atomically renamed.
- **Resource Types**: Supports **files** only (`files`). Calendars and contacts are unsupported.
