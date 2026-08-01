---
id: onedrive
title: OneDrive Personal Setup
sidebar_position: 4
---

# OneDrive Personal

Clumoove unterstützt die Datei-Migration und Synchronisation für **persönliche Microsoft-Konten** (OneDrive Personal).

:::info Hinweis
OneDrive Geschäftskonten (SharePoint / Microsoft 365 Work & School) sowie geteilte Ordner (`Shared with me`) sind in V1 nicht enthalten. Unterstüzt werden ausschließlich Datei- und Ordnerstrukturen des Konto-Inhabers.
:::

## Entwickler-Einrichtung: Azure / Microsoft Entra App Registrierung

### Schritt 1: App im Azure Portal registrieren
1. Öffne das [Microsoft Entra Admin Center (Azure Portal)](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade).
2. Klicke auf **Neue Registrierung**.
3. Name: `Clumoove Migration`.
4. Unterstützte Kontotypen: **Nur persönliche Microsoft-Konten (Personal Microsoft accounts only)**.
5. Umleitungs-URI (Web):
   `http://localhost:8001/api/oauth/callback` (bzw. `https://your-domain.com/api/oauth/callback`).
6. Klicke auf **Registrieren**.

### Schritt 2: Client Secret generieren
1. Gehe im linken Menü zu **Zertifikate & Geheimnisse**.
2. Klicke auf **Neuer geheimer Clientschlüssel**.
3. Beschreibung: `Clumoove Server Key`.
4. Kopiere den erzeugten **Wert (Value)** sofort (wird nur einmal angezeigt!).

### Schritt 3: API-Berechtigungen (Scopes) konfigurieren
Unter **API-Berechtigungen** müssen folgende delegierte Berechtigungen aktiviert sein:
- `Files.ReadWrite` (Dateien lesen und schreiben)
- `offline_access` (Refresh-Tokens für automatische Token-Rotation)
- `User.Read` (Profilinformationen lesen)

### Schritt 4: Umgebungsvariablen in Clumoove eintragen

```env
ONEDRIVE_CLIENT_ID=deine-application-client-id
ONEDRIVE_CLIENT_SECRET=dein-client-secret-wert
```

---

## Benutzernutzung in Clumoove

1. Navigiere in Clumoove zu **Verbindung hinzufügen > OneDrive Personal**.
2. Klicke auf **Mit Microsoft verbinden**.
3. Melde dich mit deinem persönlichen Microsoft-Konto an und gewähre den Zugriff.
4. Das Konto steht nun für Einzel-Migrationen sowie Ein- und Zwei-Wege-Syncs zur Verfügung.

### Prüfsummen & Verifizierung
OneDrive stellt Microsoft-spezifische `quickXorHash`-Prüfsummen bereit. Clumoove führt den Abgleich automatisch über einen **Dateigrößen- & Modifikations-Fallback** durch, um falsche Hash-Fehlermeldungen beim Transfer zwischen verschiedenen Anbietern zu vermeiden.
