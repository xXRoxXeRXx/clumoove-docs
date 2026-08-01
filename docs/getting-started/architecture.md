---
id: architecture
title: Architektur & Konzept
sidebar_position: 4
---

# System-Architektur & Konzepte

Clumoove ist modular aufgebaut, um maximale Ausfallsicherheit und hohe Parallelität bei großen Datei-Übertragungen zu gewährleisten.

## Hauptkomponenten

1. **API Gateway (`cmd/api`)**:
   - Nimmt HTTP/REST Anfragen entgegen.
   - Handhabt Benutzer-Authentifizierung, JWT & TOTP.
   - Führt den Hintergrund-Scheduler für automatische Syncs aus.
   - Verarbeitet OAuth2-Autorisierungen und automatisches Refresh-Token-Management.

2. **Migration Worker (`cmd/worker`)**:
   - Entnimmt Tasks aus der PostgreSQL-Queue via `SELECT FOR UPDATE SKIP LOCKED`.
   - Führt Datei-Streams, Verzeichnisstrukturen und Checksummenprüfungen aus.
   - Versendet Benachrichtigungen (E-Mail, Gotify, Telegram, Discord, ntfy).

3. **PostgreSQL Database**:
   - Speichert Benutzer, Profile, Migrationen, Tasks, Audit-Logs & Zeitpläne.

4. **Redis Queue & Locks**:
   - Dient als Worker-Liveness Heartbeat-Store und verhindert Scheduler-Overlaps über verteilte Schlösser (`SET NX`).

## Ablauf einer Migration

```
1. Benutzer startet Migration ──► 2. Indexer durchsucht Quell-Speicher (BFS)
                                           │
                                           ▼
4. Checksum-Verifizierer ◄── 3. Worker verarbeitet Tasks parallel (RAM-Stream)
```
