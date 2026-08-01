---
id: local-storage
title: Local Storage (Lokaler Speicher)
sidebar_position: 11
---

# Lokaler Dateisystem-Speicher (Local Storage)

Clumoove kann Dateien direkt auf dem lokalen Server-Dateisystem lesen und schreiben.

:::note Mandanten-Isolierung & Symlink-Schutz
Auf Unix/Linux-Hosts arbeitet der lokale Provider strikt innerhalb des konfigurierte Stammverzeichnisses `LOCAL_STORAGE_ROOT/users/<user-id>`. Der Zugriff erfolgt über Root-verankerte, komponentenweise `openat`/`O_NOFOLLOW` Traversierung. Pfad-Eskalationen und Symlink-Races werden dadurch vollständig unterbunden.
:::

## Konfiguration

1. Aktiviere in der `.env` das Stammverzeichnis:

```env
LOCAL_STORAGE_ROOT=/clumoove
LOCAL_STORAGE_HOST_PATH=./local-storage
```

2. Nach dem Neustart der Container steht **Local Storage** in den Systemeinstellungen und im Verbindungs-Formular zur Auswahl bereit.
