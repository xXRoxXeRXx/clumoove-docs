---
id: notifications
title: Notification Channels
sidebar_position: 5
---

# Notification Channels & Outbox

Clumoove includes a resilient notification worker (**Notifier**) that automatically delivers alerts when migrations or sync passes complete or encounter errors.

## Supported Channels

Clumoove supports 5 independent delivery channels:

1. **Email (SMTP)**:
   - Delivers completion summaries directly to the user's registered email address.
   - SMTP is managed centrally by system administrators in the settings (`instance_smtp_settings`).
2. **Gotify**:
   - Pushes alerts to your self-hosted Gotify server.
   - **Requires**: Gotify Server URL & App Token.
3. **ntfy**:
   - Delivers push notifications to any ntfy server/topic.
   - **Requires**: Server URL & Topic Name (optional Auth Token).
4. **Telegram**:
   - Sends real-time messages to a Telegram user or group chat.
   - **Requires**: Telegram Bot API Token & Chat ID.
5. **Discord**:
   - Posts rich embeds directly into a Discord channel.
   - **Requires**: Discord Webhook URL.

---

## Configuration in User Profile

1. In the Clumoove Web SPA, navigate to **Settings > Notifications**.
2. Enable your desired channels.
3. Provide the required tokens, webhook URLs, or chat IDs.
4. Click **Send Test Notification** to instantly verify delivery.
5. Save your preferences.

:::info Resilient Delivery (Durable Outbox)
All notifications are written to a durable database outbox and processed by background worker tasks with independent retry logic, ensuring no alert is lost during transient network outages.
:::
