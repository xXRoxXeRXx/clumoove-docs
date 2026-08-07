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
| `NO_RESOURCES_SELECTED` | Es wurden keine Quelldateien oder Ordner ausgewählt | Mindestens einen Ordner oder eine Datei im Browser auswählen. |
| `SCHEDULE_EXISTS` | Für diesen Job existiert bereits ein aktiver Zeitplan | Vorhandenen Zeitplan im Sync-Dashboard bearbeiten. |
| `ACCOUNT_LOCKED` | Konto nach 5 Fehlversuchen temporär für 15 Min. gesperrt | 15 Minuten warten oder Admin bitten, das Konto zu entsperren. |
| `INVALID_BODY` | Anfrage-Body ist ungültig oder überschreitet das Größenlimit | Formulardaten prüfen und erneut senden. |

:::tip Automatische Token-Rotation
Ein Hintergrund-Daemon (`RunOAuthRotationDaemon`) rotiert OAuth-Refresh-Tokens für Google, Dropbox, OneDrive und HiDrive automatisch vor ihrem Ablauf. Ein `TOKEN_EXPIRED` tritt in der Praxis nur auf, wenn die Autorisierung vom Nutzer im Drittanbieter-Konto manuell widerrufen wurde.
:::

