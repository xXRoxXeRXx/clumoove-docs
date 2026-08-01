---
id: verification
title: Checksummen-Verifizierung & Berichte
sidebar_position: 4
---

# 3-Wege-Hashprüfung & CSV-Export

Zur Gewährleistung absoluter Datenintegrität führt Clumoove nach jeder Übertragung eine kryptografische Checksummenprüfung durch.

## 3-Wege-Hashberechnung

1. **Quell-Prüfsumme**: Ein `io.TeeReader` berechnet während des Datenstreams im RAM in Echtzeit den Hash der Quelldatei (SHA-1, MD5 oder SHA-256 je nach Provider).
2. **Ziel-Prüfsumme**: Nach dem Upload fragt der Worker die Ziel-Prüfsumme ab.
3. **Fallback auf Dateigröße**: Wo Hash-Vergleiche zwischen unterschiedlichen Anbietern nicht möglich sind (z. B. OneDrive QuickXorHash vs. SHA-1), schlägt die Prüfung nicht fehl, sondern wechselt automatisch auf den Dateigrößen- und Zeitstempelabgleich.

## CSV-Migration-Report

Nach Abschluss einer Migration kannst du im Dashboard einen detaillierten **CSV-Prüfbericht** herunterladen.
- Enthalten sind alle fehlgeschlagenen Übertragungen und Verzeichnis-Fehler.
- Formel-Zeichen (`=`, `+`, `-`, `@`) werden serversetig automatisch neutralisiert, um Spreadsheet-Formel-Injection in Excel/Calc zu verhindern.
