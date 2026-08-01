---
id: installation
title: Installation & Docker Compose
sidebar_position: 2
---

# Installation & Docker Compose

Clumoove wird primär als Docker-Container-Stack betrieben. Ein vollständiges Setup besteht aus PostgreSQL, Redis, dem API-Gateway, Migration-Workern und der Frontend-SPA.

## Voraussetzungen

- **Docker** Engine >= 20.10 & **Docker Compose** v2
- Mindestens **2 GB RAM** und **2 CPU-Kerne**
- Netzwerkanbindung zu deinen Quell- und Ziel-Cloud-Speichern

## 1. Repository klonen & vorbereiten

```bash
git clone https://github.com/xXRoxXeRXx/clumoove.git
cd clumoove
cp .env.example .env
```

## 2. Umgebungsvariablen konfigurieren (`.env`)

Erstelle eine zufällige **32-Byte Secret Key** für die AES-256-GCM Verschlüsselung deiner Cloud-Passwörter und Tokens:

```bash
# Zufälligen Schlüssel generieren (Linux/macOS)
openssl rand -base64 32
```

Trage die Werte in deine `.env` ein:

```env
# ERFORDERLICH: AES-GCM Verschlüsselungsschlüssel (32 Bytes)
ENCRYPTION_SECRET_KEY=DeinGenerierter32ByteBase64Schluessel=

# ERFORDERLICH: JWT Secret Key für Benutzersitzungen
JWT_SECRET_KEY=DeinZweiterGenerierter32ByteBase64Schluessel=

# ERFORDERLICH: Sicheres Redis-Passwort
REDIS_PASSWORD=EinStarkesEinzigartigesPasswort999!

# OPTIONAL: OAuth API Keys für Cloud-Anbieter
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
ONEDRIVE_CLIENT_ID=
ONEDRIVE_CLIENT_SECRET=
DROPBOX_CLIENT_ID=
DROPBOX_CLIENT_SECRET=
HIDRIVE_CLIENT_ID=
HIDRIVE_CLIENT_SECRET=
```

:::danger Wichtiger Sicherheitshinweis
Der API-Server und der Worker **verweigern den Start**, wenn `ENCRYPTION_SECRET_KEY` oder `JWT_SECRET_KEY` fehlt, zu kurz ist (weniger als 32 Bytes) oder identisch sind.
:::

## 3. Container starten

```bash
docker compose up -d
```

Nach dem Start erreichst du:
- **Clumoove Web App**: `http://localhost:3001`
- **API Backend**: `http://localhost:8001`
- **Dokumentation**: `http://localhost:8002`
