---
id: faq
title: Häufig gestellte Fragen (FAQ)
sidebar_position: 2
---

# Häufig gestellte Fragen (FAQ)

### Werden meine Zugangsdaten im Klartext gespeichert?
Nein! Alle Passwörter, WebDAV-Tokens und OAuth-Tokens werden mit **AES-256-GCM** in der PostgreSQL-Datenbank verschlüsselt gespeichert und erst unmittelbar im Arbeitsspeicher des Workers entschlüsselt.

### Speichert Clumoove meine Dateien auf der Festplatte zwischen?
Nein! Übertragungen werden im Arbeitsspeicher (RAM-Buffer) direkt von der Quelle zum Ziel gestreamt (Zero Disk Retention).

### Was passiert bei Verbindungsunterbrechungen?
Worker nutzen ein exponentielles Backoff (`10 * 3^versuch` Sekunden). Bei abgebrochenen Übertragungen nimmt die Warteschlange nach der Wiederverbindung automatisch die Übertragung wieder auf.

### Kann ich Clumoove ohne Internetzugang im LAN betreiben?
Ja! Lokaler Speicher, MinIO (S3), SMB, SFTP und lokale Nextcloud-Instanzen funktionieren komplett offline im lokalen Netzwerk.
