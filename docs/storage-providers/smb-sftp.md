---
id: smb-sftp
title: SMB & SFTP Netzwerkspeicher
sidebar_position: 10
---

# SMB & SFTP Netzwerkspeicher

Clumoove unterstützt das Anbinden von Windows-Freigaben (SMB/CIFS) sowie Linux/Unix-Servern über SSH/SFTP.

## SFTP (Secure File Transfer Protocol)

### Sicherheit & Host Key Fingerprint
Aus Sicherheitsgründen erzwingt Clumoove beim Verbindungsaufbau die Prüfung des SSH **Host Key SHA-256 Fingerprints**, um Man-in-the-Middle-Angriffe zu verhindern.

| Formularfeld | Beschreibung | Beispiel |
|---|---|---|
| **Server Host** | Hostname oder IP-Adresse | `sftp.example.com` oder `192.168.1.50` |
| **Port** | SSH Port (Standard: 22) | `22` |
| **Benutzername** | SSH Benutzername | `backupuser` |
| **Passwort** | SSH Passwort | `••••••••` |
| **Host Key Fingerprint** | Trusted SHA-256 Fingerprint | `SHA256:abc123xyz...` |

---

## SMB / CIFS (Windows Freigabe & NAS)

| Formularfeld | Beschreibung | Beispiel |
|---|---|---|
| **Server Host** | Server IP oder Name | `nas.local` oder `192.168.1.100` |
| **Share Name** | Name der SMB-Freigabe | `data` oder `shared` |
| **Benutzername** | SMB-Benutzer | `smbuser` |
| **Passwort** | SMB-Passwort | `••••••••` |
