---
id: immich
title: Immich (Fotos & Videos)
sidebar_position: 9
---

# Immich Foto- & Videospeicher

[Immich](https://immich.app/) ist eine selbstgehostete Lösung für Fotos und Videos. Clumoove ermöglicht es, Medien direkt aus deiner Immich-Bibliothek zu migrieren oder abzusichern.

:::info Bibliotheksbasierter Virtueller Provider
Immich wird als flache Medien-Bibliothek (`/` Stammverzeichnis) ohne klassische Ordner-Hierarchie angebunden. Immich-Ziele erlauben **kein direktes Überschreiben, Atomares Umbenennen oder Ordner-Löschungen**, da Immich hochgeladene Assets anhand ihrer Prüfsumme indiziert. Nativ wird bei vorhandenen Bildern/Videos die `SKIP`-Duplikatprüfungsstrategie angewendet.
:::

## 1. API-Schlüssel in Immich erstellen

1. Logge dich in deine Immich-Instanz ein.
2. Gehe oben rechts auf **Account Settings > API Keys**.
3. Klicke auf **New API Key**.
4. Beschreibung: `Clumoove Migration`.
5. Kopiere den erzeugten API-Schlüssel.

## 2. Verbindung in Clumoove anlegen

1. Wähle **Verbindung hinzufügen > Immich**.
2. **Server URL**: `https://immich.example.com` (oder IP/Port).
3. **API Key**: Der in Schritt 1 erstelle Schlüssel im Passwortfeld.
