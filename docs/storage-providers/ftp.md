---
id: ftp
title: FTPS & FTP Netzwerkspeicher
sidebar_position: 11
---

# FTPS & FTP Netzwerkspeicher

Clumoove unterstützt Datei-Migrationen und Synchronisationen von und zu **FTPS-Servern** (FTP über TLS/SSL).

:::warning Nur sichere FTPS-Verbindungen
Aus Sicherheitsgründen unterstützt Clumoove **ausschließlich verschlüsselte FTPS-Verbindungen** (explizites oder implizites TLS). Unverschlüsseltes Plain-FTP ohne TLS wird strikt abgelehnt.
:::

## Unterstützte Verbindungstypen

1. **Explizites TLS (FTP-ES / FTPS)**:
   - **URL-Format**: `ftp://host:21?tls=explicit` (oder benutzerdefinierter Port, z. B. `ftp://sftp.example.com:2121?tls=explicit`)
   - **Verhalten**: Baut zunächst eine Standard-FTP-Verbindung auf und schaltet per `AUTH TLS` sofort auf TLS-Verschlüsselung um.
2. **Implizites TLS (FTPS)**:
   - **URL-Format**: `ftps://host:990` (oder benutzerdefinierter Port, z. B. `ftps://sftp.example.com:990`)
   - **Verhalten**: Die Verbindung wird ab dem ersten Byte über TLS verschlüsselt.

## Verbindungseinstellungen in Clumoove

Wähle **Verbindung hinzufügen > FTPS / FTP**:

| Formularfeld | Beschreibung | Beispiel |
|---|---|---|
| **Server URL** | Vollständige FTPS-URL mit Protokoll und TLS-Parameter | `ftp://ftp.example.com:21?tls=explicit` oder `ftps://ftp.example.com:990` |
| **Benutzername** | FTP-Benutzername | `ftpuser` |
| **Passwort** | FTP-Passwort | `••••••••` |

---

## Sicherheits- & Netzwerk-Features

- **Egress-Dialer & DNS-Rebinding-Schutz**: Passive Datenverbindungen (PASV / EPSV) nutzen ausschließlich die angekündigten Ports mit dem validierten Hostnamen, um Rebinding-Angriffe zu verhindern.
- **TLS-Zertifikatsprüfung**: Der TLS-Handshake erzwingt TLS 1.2+ und nutzt die Server-SNI-Prüfung gegen die angegebene Domain.
- **Integritätsprüfung**: Da FTP kein portable, standardisiertes Prüfsummenverfahren (Hash) bietet, erfolgt die Verifizierung nach dem Upload über den **Dateigrößen-Abgleich** (`VerificationSizeOnly`).
- **Atomares Überschreiben**: Dateien werden bei `OVERWRITE` über temporäre Dateien hochgeladen und anschließend atomar umbenannt.
- **Ressourcen-Typen**: Es werden ausschließlich **Dateien** unterstützt (`files`). Kalender und Kontakte sind nicht verfügbar.
