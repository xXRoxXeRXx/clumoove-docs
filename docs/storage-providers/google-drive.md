---
id: google-drive
title: Google Drive Setup
sidebar_position: 3
---

# Google Drive (Google Workspace & Personal)

Clumoove unterstützt Google Drive für Datei-Migrationen, Google Kalender und Google Kontakte.

## Entwickler-Einrichtung: OAuth 2.0 Credentials in GCP erstellen

Als Administrator oder Self-Host-Betreiber musst du einmalig eine Google Cloud Application erstellen.

### Schritt 1: Projekt in der Google Cloud Console anlegen
1. Öffne die [Google Cloud Console](https://console.cloud.google.com/).
2. Klicke auf **Projekt auswählen > Neues Projekt**.
3. Vergib einen Namen (z. B. `Clumoove Migration`) und klicke auf **Erstellen**.

### Schritt 2: Erforderliche APIs aktivieren
Navigiere zu **APIs & Dienste > Bibliothek** und aktiviere folgende APIs:
- **Google Drive API**
- **Google Calendar API**
- **People API** (für Kontakte)

### Schritt 3: OAuth-Zustimmungsbildschirm konfigurieren
1. Gehe zu **APIs & Dienste > OAuth-Zustimmungsbildschirm**.
2. Wähle **Extern** (oder Intern für Google Workspace) und klicke auf **Erstellen**.
3. Gib den Anwendungsnamen (`Clumoove`) und eine Nutzer-Support-E-Mail ein.
4. Füge im Schritt **Bereichtigungen (Scopes)** folgende Scopes hinzu:
   - `https://www.googleapis.com/auth/drive.file`
   - `https://www.googleapis.com/auth/calendar`
   - `https://www.googleapis.com/auth/contacts`

### Schritt 4: OAuth Client-ID erstellen
1. Gehe zu **APIs & Dienste > Anmeldedaten**.
2. Klicke auf **Anmeldedaten erstellen > OAuth-Client-ID**.
3. Anwendungs-Typ: **Webanwendung**.
4. Autorisierte Weiterleitungs-URIs:
   `http://localhost:8001/api/oauth/callback` (bzw. deine Server-Domain `https://your-domain.com/api/oauth/callback`).
5. Klicke auf **Erstellen** und kopiere **Client-ID** und **Client-Geheimnis**.

### Schritt 5: Umgebungsvariablen in Clumoove setzen

```env
GOOGLE_CLIENT_ID=deine-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-dein-client-secret
```

---

## Benutzernutzung in Clumoove

1. Gehe in Clumoove auf **Verbindung hinzufügen > Google Drive**.
2. Klicke auf **Mit Google verbinden**.
3. Bestätige den OAuth-Zustimmungsdialog von Google.
4. Nach erfolgreicher Autorisierung erscheint das Konto in deiner Verbindungsübersicht.
