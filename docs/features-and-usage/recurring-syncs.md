---
id: recurring-syncs
title: Wiederkehrende Syncs & Zeitpläne
sidebar_position: 3
---

# Wiederkehrende Sync-Jobs & Zeitpläne

Neben Einmal-Migrationen ermöglicht Clumoove das automatische Synchronisieren von Ordnern nach Zeitplan (z. B. alle 90 Minuten oder per Cron-Ausdruck).

## Modus-Auswahl

- **Ein-Wege-Sync (One-Way Sync)**: Spiegelt Änderungen von der Quelle zum Ziel.
- **Zwei-Wege-Sync (Two-Way Sync)**: Gleicht Änderungen bidirektional ab.
- **Löschweitergabe (Delete Propagation)**: In Quelle gelöschte Dateien werden optional im Ziel entfernt.

## Bandbreiten-Limits (Mbps)

Du kannst pro Sync-Job ein **Live-Bandbreitenlimit** (0 bis 1000 Mbps) festlegen, das auch während eines laufenden Syncs in Echtzeit angepasst werden kann.

## Überlappungsschutz

Der Clumoove-Scheduler verhindert automatisch das doppelte Ausführen eines Jobs: Wenn ein 90-Minuten-Sync nach 60 Minuten noch läuft, wird der nächste Durchlauf übersprungen und die nächste Ausführungszeit berechnet.

---

## Bestehende Sync-Jobs bearbeiten

Bereits angelegte Sync-Jobs müssen nicht gelöscht und neu erstellt werden, wenn sich Anforderungen ändern. Klicke im **Sync Dashboard** bei einem Job auf **Bearbeiten** (Stift-Symbol), um das Bearbeitungs-Modal zu öffnen:

- **Quell-Pfade anpassen**: Wähle über den integrierten Dateibrowser zusätzliche Ordner/Dateien aus oder hebe die Auswahl auf.
- **Zielverzeichnis ändern**: Öffne den Ziel-Browser und passe den Ziel-Ordner an.
- **Modus & Optionen**: Wechsle flexibel zwischen Ein-Wege- (`one_way`) und Zwei-Wege-Sync (`two_way`), aktiviere/deaktiviere die Löschweitergabe oder ändere die Konfliktstrategie (`SKIP`, `OVERWRITE`, `RENAME`).
- **Intervall & Bandbreite**: Passe das Zeit-Intervall (in Minuten) sowie das Live-Bandbreitenlimit an.

