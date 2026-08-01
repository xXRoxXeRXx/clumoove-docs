---
id: dropbox
title: Dropbox Setup
sidebar_position: 5
---

# Dropbox Setup & OAuth App

Clumoove unterstützt Datei-Migrationen und Synchronisationen von und zu Dropbox.

## Entwickler-Einrichtung: App in der Dropbox App Console erstellen

### Schritt 1: Dropbox App anlegen
1. Öffne die [Dropbox App Console](https://www.dropbox.com/developers/apps).
2. Klicke auf **Create app**.
3. Wähle **Scoped access**.
4. Access Type: **Full Dropbox** (Zugriff auf alle Ordner im Dropbox-Konto).
5. App Name: `Clumoove-Migration-[DeineID]`.
6. Klicke auf **Create App**.

### Schritt 2: Permissions (Scopes) konfigurieren
Navigiere zum Reiter **Permissions** und aktiviere folgende Häkchen:
- `files.metadata.read`
- `files.metadata.write`
- `files.content.read`
- `files.content.write`
- `account_info.read`

Klicke unten auf **Submit**, um die Änderungen zu speichern.

### Schritt 3: Redirect URI eintragen & Keys kopieren
1. Gehe zurück zum Reiter **Settings**.
2. Scrolle zu **OAuth 2 > Redirect URIs**.
3. Füge `http://localhost:8001/api/oauth/callback` (bzw. deine Produktions-URL) hinzu und klicke auf **Add**.
4. Kopiere **App key** und **App secret**.

### Schritt 4: Umgebungsvariablen in Clumoove setzen

```env
DROPBOX_CLIENT_ID=dein-app-key
DROPBOX_CLIENT_SECRET=dein-app-secret
```

---

## Verbindung in Clumoove herstellen

1. Klicke in Clumoove auf **Verbindung hinzufügen > Dropbox**.
2. Klicke auf **Mit Dropbox verbinden**.
3. Autorisierte den Zugriff im geöffneten Fenster.
