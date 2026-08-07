---
id: index
title: Übersicht Speicher-Anbieter
sidebar_position: 1
---

# Unterstützte Speicher-Anbieter

Clumoove unterstützt eine Vielzahl von Cloud-Speichern, Protokollen und lokalen Netzwerkspeichern.

## Kompatibilitäts- & Feature-Matrix

| Provider | Typ | OAuth | Dateien | Kalender | Kontakte | Atomares Überschreiben |
|---|---|:---:|:---:|:---:|:---:|:---:|
| **Nextcloud** | Cloud / Self-Host | ❌ (App-Passwort) | ✅ | ✅ | ✅ | ✅ |
| **Google Drive** | Cloud | ✅ | ✅ | ✅ | ✅ | ✅ |
| **OneDrive Personal** | Cloud | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Dropbox** | Cloud | ✅ | ✅ | ❌ | ❌ | ✅ |
| **STRATO HiDrive** | Cloud | ✅ | ✅ | ❌ | ❌ | ✅ |
| **Telekom MagentaCLOUD** | Cloud | ❌ (WebDAV) | ✅ | ❌ | ❌ | ✅ |
| **AWS S3 / MinIO** | Object Storage | ❌ (Access Key) | ✅ | ❌ | ❌ | ✅ |
| **Immich** | Fotos / Medien | ❌ (API Key) | ✅ (Bilder/Videos) | ❌ | ❌ | ❌ (Virtuell) |
| **WebDAV** | Standard-Protokoll | ❌ (Basic Auth) | ✅ | ❌ | ❌ | ✅ |
| **SMB / SFTP** | Netzwerk-Speicher | ❌ (SSH/SMB Auth) | ✅ | ❌ | ❌ | ✅ |
| **FTPS / FTP** | Netzwerk-Speicher | ❌ (FTP/TLS Auth) | ✅ | ❌ | ❌ | ✅ |
| **Local Storage** | Lokaler Pfad | ❌ | ✅ | ❌ | ❌ | ✅ |

---

Wähle in der linken Seitenleiste den gewünschten Speicher-Anbieter für eine ausführliche Einrichtungsanleitung inklusive Developer-Portal-Schritten und Formularhilfe.
