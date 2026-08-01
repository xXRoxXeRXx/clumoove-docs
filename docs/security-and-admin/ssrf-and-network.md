---
id: ssrf-and-network
title: Netzwerksicherheit & SSRF-Schutz
sidebar_position: 4
---

# Netzwerksicherheit & SSRF-Schutz

Da Benutzer eigene WebDAV-, Nextcloud-, S3- oder SFTP-Serveradressen eingeben können, schützt Clumoove das interne Netzwerk vor Server-Side Request Forgery (SSRF) Angriffen.

## Schutzmechanismen

1. **Loopback & Link-Local Blockade**:
   - `127.0.0.0/8`, `::1` sowie Link-Local Adressen (`169.254.0.0/16`, u. a. Cloud Metadata `169.254.169.254`) sind strikt verboten.

2. **Mitigation von DNS-Rebinding (TOCTOU)**:
   - Die Zieladresse wird unmittelbar vor dem Verbindungsaufbau im benutzerdefinierten Dialer (`egressDialer.DialContext`) erneut aufgelöst und geprüft, während der ursprüngliche Hostname für TLS-SNI- und Zertifikatsprüfungen beibehalten wird.

3. **Blockade privater Netzwerke (`MIGRATION_BLOCK_PRIVATE`)**:
   - Wenn `MIGRATION_BLOCK_PRIVATE=1` in der `.env` gesetzt ist, blockiert Clumoove auch private RFC1918-Netzwerke (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`).
