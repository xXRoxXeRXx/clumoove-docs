---
id: immich
title: Immich (Photos & Videos)
sidebar_position: 9
---

# Immich Media Storage

[Immich](https://immich.app/) is a self-hosted photo/video management platform.

:::info Library-Based Virtual Provider
Immich connects as a flat media library (`/` root directory) without traditional directory hierarchies. Overwrite, atomic rename, and directory deletion are unsupported; native checksum-based duplicate `SKIP` is enforced.
:::

## 1. Create API Key
In Immich, navigate to **Account Settings > API Keys** and generate a new key.

## 2. Connect in Clumoove
Add connection, select **Immich**, enter server URL and API Key.
