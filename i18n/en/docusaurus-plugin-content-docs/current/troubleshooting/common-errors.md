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
