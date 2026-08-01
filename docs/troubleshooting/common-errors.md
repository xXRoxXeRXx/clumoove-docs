---
id: common-errors
title: Fehlercodes & Referenz
sidebar_position: 1
---

# Fehlercodes Referenz (API Error Codes)

Das Backend von Clumoove gibt bei Fehlern stets maschinenlesbare `error_code`-Strings zurück.

## Übersicht der häufigsten Fehlercodes

| Fehlercode | Beschreibung | Behebung |
|---|---|---|
| `AUTH_FAILED` | Ungültige Anmeldedaten oder abgelaufenes Token | Zugangsdaten prüfen oder Konto neu autorisieren. |
| `MIGRATION_NOT_OWNED` | Zugriff auf eine fremde Migration verweigert | Prüfen, ob du als Eigentümer angemeldet bist. |
| `SSRF_BLOCKED` | Die angegebene Server-URL verweist auf eine verbotene IP (z. B. Loopback oder Cloud-Metadaten) | Gültige externe Serveradresse oder erlaubtes lokales Ziel angeben. |
| `RATE_LIMIT_EXCEEDED` | Zu viele Anfragen in kurzer Zeit | Einige Minuten warten und erneut versuchen. |
| `SETUP_ALREADY_COMPLETED` | Initiales Admin-Setup wurde bereits durchgeführt | Das Bootstrap-Formular ist deaktiviert. |
| `TOKEN_EXPIRED` | OAuth Refresh Token ist abgelaufen oder wurde widerrufen | Re-Autorisierung über den **Erneut verbinden**-Button durchführen. |
| `HASH_MISMATCH` | Prüfsummenabweichung nach der Übertragung | Datei-Übertragung wiederholen (`SKIP` oder `OVERWRITE`). |
| `PROVIDER_NOT_CONFIGURED` | Der ausgewählte OAuth-Provider ist serverseitig nicht eingerichtet | In der `.env` den `CLIENT_ID` & `CLIENT_SECRET` des Providers konfigurieren. |
