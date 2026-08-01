---
id: nextcloud
title: Nextcloud & WebDAV
sidebar_position: 2
---

# Nextcloud Einrichtung & Konfiguration

Nextcloud wird nativ als Cloud-Speicher für Datei-Migrationen sowie für Kalender (CalDAV) und Kontakte (CardDAV) unterstützt.

## Voraussetzungen

- Eine laufende Nextcloud-Instanz (Selbstgehostet oder Cloud-Anbieter)
- Ein gültiges **App-Passwort** (aus Sicherheitsgründen sollte niemals das Haupt-Passwort verwendet werden).

## 1. App-Passwort in Nextcloud erstellen

1. Logge dich in deine Nextcloud-Instanz ein.
2. Klicke oben rechts auf dein **Profilbild > Einstellungen**.
3. Navigiere in der linken Spalte zu **Sicherheit**.
4. Scrolle ganz nach unten zu **Geräte & Einstellungen** (App-Passwörter).
5. Gib einen Namen ein (z. B. `Clumoove Migration`) und klicke auf **Neues App-Passwort erstellen**.
6. Kopiere den angezeigten Benutzernamen und das generierte Passwort.

## 2. Verbindung in Clumoove anlegen

Öffne in Clumoove das Formular **Verbindung hinzufügen** (`ConnectForm`) und wähle **Nextcloud**:

| Formularfeld | Beschreibung | Beispiel |
|---|---|---|
| **Server URL** | Vollständige URL zu deiner Nextcloud-Instanz | `https://cloud.example.com` |
| **Benutzername** | Dein Nextcloud-Benutzername | `admin` |
| **Passwort** | Das in Schritt 1 erstellte **App-Passwort** | `xxxx-xxxx-xxxx-xxxx` |

## Supported Resource Types
- **Dateien**: Vollständiger Ordnerbaum & Datei-Streaming.
- **Kalender**: CalDAV VCALENDAR-Einträge (werden beim Überschreiben synchronisiert).
- **Kontakte**: CardDAV VCARD-Visitenkarten.
