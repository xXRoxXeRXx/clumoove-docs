---
id: local-storage
title: Local Storage (Lokaler Speicher)
sidebar_position: 11
---

# Lokaler Dateisystem-Speicher (Local Storage)

Clumoove kann Dateien direkt auf dem lokalen Server-Dateisystem lesen und schreiben.

:::note Mandanten-Isolierung & Plattform-Hinweise
- **Tenant-Isolierung**: Auf Unix/Linux-Hosts arbeitet der lokale Provider strikt innerhalb des konfigurierten Stammverzeichnisses `LOCAL_STORAGE_ROOT/users/<user-id>`. Der Zugriff erfolgt über Root-verankerte, komponentenweise `openat`/`O_NOFOLLOW` Traversierung. Pfad-Eskalationen und Symlink-Races werden dadurch vollständig unterbunden.
- **Sichtbarkeit in der Benutzeroberfläche**: Die Option **Local Storage** wird in der Benutzeroberfläche erst freigeschaltet (`local_storage_enabled`), wenn `LOCAL_STORAGE_ROOT` in der `.env` definiert ist. Ist die Variable nicht gesetzt, bleibt die Option im UI verborgen.
- **Windows Host-Einschränkung**: Schreib- und Mutationsoperationen auf dem lokalen Dateisystem sind auf Windows-Hosts aus Sicherheitsgründen vorübergehend deaktiviert, bis eine entsprechende handle-relative Implementierung vorliegt.
:::

## Konfiguration

1. Aktiviere in der `.env` das Stammverzeichnis:

```env
LOCAL_STORAGE_ROOT=/clumoove
LOCAL_STORAGE_HOST_PATH=./local-storage
```

2. Nach dem Neustart der Container steht **Local Storage** im Verbindungs-Formular zur Auswahl bereit.

