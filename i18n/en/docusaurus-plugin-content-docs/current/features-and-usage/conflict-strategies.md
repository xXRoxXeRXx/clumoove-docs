---
id: conflict-strategies
title: Conflict Resolution (SKIP, OVERWRITE, RENAME)
sidebar_position: 2
---

# Conflict Resolution Strategies

When a file already exists at the target, Clumoove executes the selected conflict strategy:

- **`SKIP`**: Short-circuits transfer if file sizes match.
- **`OVERWRITE`**: Uploads to `.tmp` file first, then atomically renames to target name upon completion.
- **`RENAME`**: Appends suffixes (e.g. `document_1.pdf`) up to 100 attempts without destroying existing data.
