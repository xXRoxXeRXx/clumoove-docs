---
id: immich
title: Immich (Photos & Videos)
sidebar_position: 9
---

# Immich Media Storage

[Immich](https://immich.app/) is a self-hosted photo/video management platform.

:::info Virtual Provider
Immich uses virtual directory structures (`/Timeline` and `/Albums`). Overwrite, atomic rename, and deletion are unsupported; native duplicate `SKIP` is enforced.
:::

## 1. Create API Key
In Immich, navigate to **Account Settings > API Keys** and generate a new key.

## 2. Connect in Clumoove
Add connection, select **Immich**, enter server URL and API Key.
