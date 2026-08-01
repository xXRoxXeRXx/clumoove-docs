# Clumoove User Documentation (`clumoove-docs`)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docusaurus 3](https://img.shields.io/badge/Docusaurus-v3-blue.svg)](https://docusaurus.io/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)](https://www.docker.com/)
[![i18n](https://img.shields.io/badge/i18n-DE%20%7C%20EN-green.svg)](https://docs.clumoove.com)

Official user documentation and manual for [Clumoove](https://github.com/xXRoxXeRXx/clumoove) — the self-hosted open-source cloud migration, synchronization, and backup platform.

---

## 📖 Overview

This repository contains the full Docusaurus 3 source code for the public Clumoove User Documentation (`https://docs.clumoove.com`).

### Features
- **Dual Language Support (i18n)**: Native German (`de`) and English (`en`) documentation pages.
- **Offline Client-side Search**: Powered by `@easyops-cn/docusaurus-search-local` without SaaS tracking.
- **Clumoove UI Design Token Integration**: Custom CSS stylesheet matching the Clumoove SPA light & dark design system.
- **Comprehensive Provider Guides**: Step-by-step developer portal walkthroughs (OAuth Client ID/Secret, Scopes, Claims, Redirect URIs) for Nextcloud, Google Drive, OneDrive Personal, Dropbox, HiDrive, Telekom MagentaCLOUD, S3, Immich, SMB, and SFTP.
- **Production Container Ready**: Multi-stage Nginx Dockerfile configured with strict security headers.

---

## 📁 Repository Structure

```
clumoove-docs/
├── docs/                                 # German Documentation (Default)
│   ├── 01-getting-started/               # Overview, Docker Installation, Initial Admin Setup, Architecture
│   ├── 02-storage-providers/             # Nextcloud, Google Drive, OneDrive, Dropbox, HiDrive, S3, Immich...
│   ├── 03-features-and-usage/            # Single Migrations, Conflict Strategies, Sync Jobs, Verification
│   ├── 04-security-and-admin/            # RBAC User Management, 2FA/TOTP, Audit Logs, SSRF Network Guards
│   └── 05-troubleshooting/               # Common Machine-Readable Error Codes & FAQ
│
├── i18n/en/docusaurus-plugin-content-docs/current/  # English Translations
│   ├── getting-started/
│   ├── storage-providers/
│   ├── features-and-usage/
│   ├── security-and-admin/
│   └── troubleshooting/
│
├── src/                                  # Homepage, React Components & Custom UI Stylesheet
│   ├── css/custom.css                    # Adopted Clumoove SPA design tokens
│   └── pages/index.tsx                   # Customized landing page
│
├── docusaurus.config.ts                  # Docusaurus configuration (i18n, search, navbar, footer)
├── sidebars.ts                           # Document tree navigation hierarchy
├── Dockerfile                            # Multi-stage production Nginx container build
├── nginx.conf                            # Nginx web server config with security headers
└── LICENSE                               # Open-source MIT License
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x

### Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm start

# 3. Test production static build (compiles DE & EN locales)
npm run build

# 4. Preview built static site locally
npm run serve
```

---

## 🐳 Docker Deployment

### Run Container via Docker Compose

```yaml
services:
  docs:
    build:
      context: ./clumoove-docs
      dockerfile: Dockerfile
    container_name: clumoove-docs
    restart: always
    ports:
      - "8002:80"
```

Start container:
```bash
docker compose up -d docs
```

The documentation is served by Nginx on port **8002** (or behind a reverse proxy routing `docs.clumoove.com`).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.
