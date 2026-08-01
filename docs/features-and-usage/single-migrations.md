---
id: single-migrations
title: Einzel-Migrationen
sidebar_position: 1
---

# Einmalige Migrationen durchführen

Eine Migration kopiert Dateien, Ordnerstrukturen, Kalender oder Kontakte von einem Quell-Speicher zu einem Ziel-Speicher.

## 1. Migration konfigurieren

1. Klicke im Dashboard auf **Neue Migration erstellen**.
2. **Quelle auswählen**: Wähle dein Quell-Profil und durchsuche den Ordnerbaum via Dateibrowser.
3. **Ziel auswählen**: Wähle dein Ziel-Profil und gib den Ziel-Ordner an.
4. **Ressourcen-Typen**:
   - `Dateien`: Durchsucht rekursiv den Ordnerbaum (BFS).
   - `Kalender`: Migriert VCALENDAR-Einträge.
   - `Kontakte`: Migriert VCARD-Kontakte.
5. **Parallele Threads**: Stelle die Anzahl der parallelen Übertragungs-Threads (1 bis 16) ein.

## 2. Live-Fortschritt & Monitoring

Sobald die Migration gestartet ist, wird der Fortschritt in Echtzeit via **Server-Sent Events (SSE)** auf der Detailseite gestreamt:
- Aktuell übertragene Dateien & Datenrate.
- Gesamtzahl der indizierten Dateien, erfolgreich übertragene, übersprungene und fehlgeschlagene Dateien.
- Fehlerprotokolle pro Ordner.
