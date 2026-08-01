---
id: verification
title: Checksum Verification & Reports
sidebar_position: 4
---

# 3-Way Checksum Verification & Reports

Post-migration verification ensures 100% data integrity.

1. **Source Hash**: Computed in real-time while streaming via `io.TeeReader` (SHA-1/MD5/SHA-256).
2. **Target Hash**: Queried after upload completion.
3. **Size Fallback**: Degrades gracefully to size comparisons when cross-provider hashes cannot be directly compared.
4. **CSV Export**: Download detailed reports with server-side formula injection neutralization.
