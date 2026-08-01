---
id: index
title: Übersicht & Einführung
sidebar_position: 1
---

# Willkommen zur Clumoove Dokumentation

**Clumoove** ist eine selbstgehostete Open-Source-Plattform für Hochleistungs-Cloud-Migrationen, Zwei-Wege-Synchronisationen und automatisierte Backups zwischen verschiedenen Speicheranbietern (Nextcloud, S3, Google Drive, OneDrive Personal, Dropbox, HiDrive, Immich, WebDAV, SMB/SFTP und lokalem Speicher).

:::note Kernmerkmale
- **Multi-Provider Support**: Nahtlose Migration zwischen Cloud- und On-Premise-Speichern.
- **Durable Transfer Queue**: Ausfallsichere Warteschlange auf PostgreSQL-Basis (`SKIP LOCKED`).
- **Cryptographic Hash Verification**: 3-Wege-Prüfsummenvalidierung (SHA-1, MD5, SHA-256) nach jeder Migration.
- **Hohe Sicherheit**: Ende-zu-Ende AES-256-GCM Verschlüsselung von Zugangsdaten, SSRF-Schutz & 2FA/TOTP Unterstützung.
:::

## Schnellnavigation

- [🚀 Installation via Docker Compose](./installation.md)
- [⚙️ Erste Admin-Einrichtung](./initial-setup.md)
- [🔌 Speicher-Anbieter verbinden](../storage-providers/index.md)
- [🔄 Einzel-Migrationen & Sync-Jobs](../features-and-usage/single-migrations.md)
- [💡 Fehlerbehebung & Error Codes](../troubleshooting/common-errors.md)
