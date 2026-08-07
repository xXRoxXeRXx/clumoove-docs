---
id: common-errors
title: Error Codes Reference
sidebar_position: 1
---

# Error Codes Reference

Clumoove returns machine-readable `error_code` strings.

| Error Code | Description | Solution |
|---|---|---|
| `AUTH_FAILED` | Invalid credentials or expired token | Check credentials or re-authorize. |
| `MIGRATION_NOT_OWNED` | Access to another user's migration denied | Verify account ownership. |
| `SSRF_BLOCKED` | Host URL resolves to forbidden IP address | Provide valid public/local target. |
| `RATE_LIMIT_EXCEEDED` | Request rate limit reached | Wait a few minutes and retry. |
| `TOKEN_EXPIRED` | OAuth Refresh Token expired or revoked | Re-authorize via Reconnect button. |
| `HASH_MISMATCH` | Post-transfer checksum mismatch | Retry transfer using `SKIP` or `OVERWRITE`. |
| `NO_RESOURCES_SELECTED` | No source files or directories selected | Select at least one folder or file in browser. |
| `SCHEDULE_EXISTS` | Active schedule already exists for this job | Edit existing schedule in Sync Dashboard. |
| `ACCOUNT_LOCKED` | Account temporarily locked after 5 failed logins | Wait 15 minutes or ask admin to unlock. |
| `INVALID_BODY` | Request body is malformed or exceeds size limit | Verify form payload and resubmit. |

:::tip Automatic Token Rotation
A background daemon (`RunOAuthRotationDaemon`) automatically rotates OAuth refresh tokens for Google, Dropbox, OneDrive, and HiDrive prior to expiry. `TOKEN_EXPIRED` only occurs if access was manually revoked in the provider account.
:::

