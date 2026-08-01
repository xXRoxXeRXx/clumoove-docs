---
id: ssrf-and-network
title: Network Security & SSRF Protection
sidebar_position: 4
---

# Network Security & SSRF Protection

Protects internal networks by blocking loopback (`127.0.0.0/8`), link-local (`169.254.0.0/16`), TOCTOU DNS rebinding, and optional private network ranges (`MIGRATION_BLOCK_PRIVATE=1`).
