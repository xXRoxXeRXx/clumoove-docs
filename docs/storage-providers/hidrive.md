---
id: hidrive
title: STRATO HiDrive Setup
sidebar_position: 6
---

# STRATO HiDrive Setup

STRATO HiDrive wird über die offizielle HiDrive REST API per OAuth 2.0 unterstützt.

## Entwickler-Einrichtung: App im STRATO HiDrive Developer Portal erstellen

### Schritt 1: App Registrieren
1. Besuche das [STRATO HiDrive Developer Portal](https://dev.hidrive.strato.com/).
2. Melde dich mit deinen STRATO Zugangsdaten an.
3. Klicke auf **My Apps > Register New App**.
4. App Name: `Clumoove Migration`.
5. Redirect URI: `http://localhost:8001/api/oauth/callback` (bzw. deine Server-URL).

### Schritt 2: Scopes & Credentials
- **Scope**: `role_user`, `rw` (Read & Write)
- Kopiere **Client ID** (App ID) und **Client Secret**.

### Schritt 3: Umgebungsvariablen setzen

```env
HIDRIVE_CLIENT_ID=deine-client-id
HIDRIVE_CLIENT_SECRET=dein-client-secret
```

---

## Benutzernutzung in Clumoove

1. Gehe zu **Verbindung hinzufügen > HiDrive**.
2. Klicke auf **Mit HiDrive verbinden**.
3. Gib deine STRATO Zugangsdaten ein und gewähre den Zugriff.
