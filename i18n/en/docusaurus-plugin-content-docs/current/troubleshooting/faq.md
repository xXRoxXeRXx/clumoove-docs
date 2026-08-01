---
id: faq
title: Frequently Asked Questions (FAQ)
sidebar_position: 2
---

# Frequently Asked Questions (FAQ)

### Are my credentials stored securely?
Yes! Credentials are encrypted in PostgreSQL using **AES-256-GCM** and only decrypted in-memory by workers.

### Does Clumoove store files on disk?
No! File streams are buffered directly in RAM (Zero Disk Retention).

### How are network drops handled?
Workers utilize exponential backoff (`10 * 3^attempt` seconds) and automatically resume interrupted transfers.
