---
id: architecture
title: Architecture & Concepts
sidebar_position: 4
---

# System Architecture & Core Concepts

Clumoove is designed modularly to provide maximum resilience and high concurrency for large file transfers.

## Core Components

1. **API Gateway (`cmd/api`)**:
   - Handles REST API requests, auth, JWT & TOTP.
   - Executes background scheduler daemon.
   - Manages OAuth2 authorization flows and token refresh daemons.

2. **Migration Worker (`cmd/worker`)**:
   - Claims tasks from PostgreSQL queue via `SELECT FOR UPDATE SKIP LOCKED`.
   - Executes file streaming, directory indexing (BFS), and hash validation.
   - Delivers notifications (Email, Gotify, Telegram, Discord, ntfy).

3. **PostgreSQL Database**:
   - Persists users, profiles, migrations, tasks, audit logs, and schedules.

4. **Redis Queue & Locks**:
   - Manages worker heartbeats and distributed locks (`SET NX`).
