---
id: initial-setup
title: Ersteinrichtung & Admin-Setup
sidebar_position: 3
---

# Ersteinrichtung & Admin-Bootstrap

Nach der Neuinstallation befindet sich Clumoove im Einrichtungsmodus.

## 1. Initialer Administrator-Account

Beim ersten Aufruf der Web-Oberfläche (`http://localhost:3001`) fordert dich Clumoove auf, das erste Administrator-Konto einzurichten.

- **E-Mail-Adresse**: Deine Administrator-E-Mail
- **Passwort**: Mindestens 12 Zeichen mit Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen
- **Benutzername**: Dein Admin-Benutzername

:::warning Einmalige Sperre
Sobald der erste Administrator angelegt ist, wird der Bootstrap-Endpunkt `/api/auth/setup-admin` **dauerhaft gesperrt** (`403 Forbidden - SETUP_ALREADY_COMPLETED`). Weitere Benutzer können nur noch vom Admin im Bereich **Einstellungen > Benutzerverwaltung** angelegt werden.
:::

## 2. Zwei-Faktor-Authentifizierung (TOTP) aktivieren

Es wird dringend empfohlen, die 2FA für Admin-Konten sofort zu aktivieren:

1. Navigiere zu **Profil & Sicherheit > 2FA-Einstellungen**.
2. Scanne den QR-Code mit einer Authenticator-App (z. B. Google Authenticator, 2FAS, Bitwarden).
3. Gib den 6-stelligen Code ein und speichere die angezeigten **Einmal-Wiederherstellungscodes** an einem sicheren Ort auf.
