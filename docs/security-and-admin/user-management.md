---
id: user-management
title: Benutzerverwaltung & Rollen
sidebar_position: 1
---

# Benutzerverwaltung & Rollenkonzept

Clumoove unterstützt ein rollenbasiertes Rechtesystem (RBAC) zur Verwaltung von Benutzern und Systemressourcen.

## Benutzerrollen

1. **`ADMIN`**:
   - Vollzugriff auf das Gesamtsystem, globale Einstellungen, Benutzerverwaltung und System-Audit-Logs.
   - Kann Benutzer erstellen, bearbeiten, deaktivieren oder entsperren.
2. **`USER`**:
   - Kann eigene Verbindungsprofile anlegen, Migrationen und Sync-Jobs starten sowie eigene Berichte einsehen.
   - Kein Zugriff auf Fremddaten anderer Nutzer.

## Benutzer sperren / reaktivieren

Wenn ein Admin einen Benutzer sperrt:
- Werden alle aktiven Migrationen und Sync-Jobs dieses Benutzers sofort pausiert.
- Laufende Übertragungen werden abgebrochen.
- Beim Reaktivieren werden die Zeitpläne automatisch wieder aktiviert.
