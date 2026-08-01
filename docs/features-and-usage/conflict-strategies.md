---
id: conflict-strategies
title: Konfliktstrategien (SKIP, OVERWRITE, RENAME)
sidebar_position: 2
---

# Konfliktstrategien bei Dateikollisionen

Wenn am Zielort bereits eine Datei mit identischem Namen existiert, wendet Clumoove die von dir gewählte Konfliktstrategie an:

## 1. `SKIP` (Überspringen)
- **Verhalten**: Prüft die Dateigröße am Ziel. Wenn die Datei existiert und die Größe übereinstimmt, wird der Upload übersprungen.
- **Einsatz**: Ideal für schnelle Wiederholungen abgebrochener Übertragungen.

## 2. `OVERWRITE` (Sicheres Überschreiben)
- **Verhalten**: Clumoove lädt die neue Datei zunächst in eine temporäre Datei (z. B. `filename.tmp`) auf dem Zielserver hoch. Nach erfolgreichem Stream und Hash-Check wird die Datei atomar umbenannt.
- **Vorteil**: Bei Verbindungsunterbrechungen bleibt die alte Originaldatei unbeschädigt.

## 3. `RENAME` (Automatisch Umbenennen)
- **Verhalten**: Wenn `dokument.pdf` existiert, erstellt Clumoove automatisch `dokument_1.pdf` (bis zu 100 Suffix-Versuche).
- **Vorteil**: Keine Daten werden überschrieben.
