---
id: totp-2fa
title: Zwei-Faktor-Authentifizierung (2FA)
sidebar_position: 2
---

# Zwei-Faktor-Authentifizierung (TOTP 2FA)

Die 2FA schützt Benutzerkonten vor unbefugtem Zugriff durch die Abfrage eines zeitbasierten Einmal-Passworts (TOTP).

## Einrichtung

1. Öffne **Profil & Einstellungen > 2FA**.
2. Scanne den angezeigten QR-Code mit einer Authenticator-App.
3. Bestätige die Einrichtung durch Eingabe eines 6-stelligen Codes.
4. Nach erfolgreicher Bestätigung generiert Clumoove **Einmal-Wiederherstellungscodes**.

## Rate Limiting & Sperren

- Nach **5 fehlgeschlagenen 2FA-Eingaben** wird das Konto für **15 Minuten gesperrt**, um Brute-Force-Angriffe zu unterbinden.
