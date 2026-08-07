---
id: notifications
title: Benachrichtigungskanäle
sidebar_position: 5
---

# Benachrichtigungskanäle & Outbox

Clumoove verfügt über einen ausfallsicheren Benachrichtigungs-Dienst (**Notifier**), der Ereignisse wie den Abschluss oder das Fehlschlagen von Migrationen und Sync-Durchläufen automatisch verschickt.

## Unterstützte Kanäle

Clumoove unterstützt 5 unabhängige Benachrichtigungskanäle:

1. **E-Mail (SMTP)**:
   - Sendet HTML-Abschlussberichte und Warnungen direkt an die im Benutzerkonto hinterlegte E-Mail-Adresse.
   - Der SMTP-Server wird zentral von Administratoren in den Einstellungen konfiguriert (`instance_smtp_settings`).
2. **Gotify**:
   - Sendet Push-Benachrichtigungen an deinen selbstgehosteten Gotify-Server.
   - **Benötigt**: Gotify-Server-URL & App-Token.
3. **ntfy**:
   - Pusht Meldungen an deinen öffentlichen oder privaten ntfy-Server/Topic.
   - **Benötigt**: Server-URL, Topic-Name (und optional Auth-Token).
4. **Telegram**:
   - Sendet Echtzeit-Nachrichten direkt in deine Telegram-Gruppe oder dein Benutzer-Chat.
   - **Benötigt**: Telegram Bot API Token & Chat ID.
5. **Discord**:
   - Formatiert Ereignisse als Rich Embeds in einen Discord-Kanal.
   - **Benötigt**: Discord Webhook URL.

---

## Einrichtung im Benutzerprofil

1. Navigiere in der Clumoove Web-App zu **Einstellungen > Benachrichtigungen**.
2. Aktiviere die gewünschten Kanäle per Schalter.
3. Trage die erforderlichen Tokens, Webhook-URLs oder IDs ein.
4. Klicke auf **Test-Benachrichtigung senden**, um die Konfiguration sofort zu überprüfen.
5. Speichere die Einstellungen.

:::info Ausfallsichere Zustellung (Outbox Pattern)
Benachrichtigungen werden in einer dauerhaften Datenbank-Outbox gespeichert und vom Worker unabhängig per Retry-Mechanismus zugestellt. So gehen Benachrichtigungen auch bei kurzen Netzwerkausfällen oder externen API-Störungen nicht verloren.
:::
