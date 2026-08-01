---
id: audit-logging
title: Audit-Logging & Sicherheitsüberwachung
sidebar_position: 3
---

# Audit-Logging & Sicherheitsüberwachung

Alle sicherheitsrelevanten Aktionen in Clumoove werden unveränderlich in der Datenbank-Tabelle `audit_log` protokolliert.

## Protokollierte Ereignisse

- Anmeldungen & Fehlgeschlagene Login-Versuche
- Konto-Sperrungen & Password-Resets
- 2FA-Aktivierungen & Wiederherstellungscode-Nutzung
- Erstellen, Ändern & Löschen von Speicher-Profilen
- Start, Pause, Abbruch & Löschen von Migrationen/Syncs
- Änderungen an Systemeinstellungen durch Administratoren

IP-Adressen in Audit-Logs werden bereinigt (Stripping von Steuerzeichen & Control Characters gegen Log Injection CWE-117).
