import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '🚀 Erste Schritte',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/installation',
        'getting-started/initial-setup',
        'getting-started/architecture',
      ],
    },
    {
      type: 'category',
      label: '🔌 Speicher-Anbieter',
      collapsed: false,
      items: [
        'storage-providers/index',
        'storage-providers/nextcloud',
        'storage-providers/google-drive',
        'storage-providers/onedrive',
        'storage-providers/dropbox',
        'storage-providers/hidrive',
        'storage-providers/magentacloud',
        'storage-providers/s3',
        'storage-providers/immich',
        'storage-providers/smb-sftp',
        'storage-providers/ftp',
        'storage-providers/local-storage',
      ],
    },
    {
      type: 'category',
      label: '🔄 Funktionen & Nutzung',
      collapsed: false,
      items: [
        'features-and-usage/single-migrations',
        'features-and-usage/conflict-strategies',
        'features-and-usage/recurring-syncs',
        'features-and-usage/verification',
        'features-and-usage/notifications',
      ],
    },
    {
      type: 'category',
      label: '🛡️ Sicherheit & Admin',
      collapsed: false,
      items: [
        'security-and-admin/user-management',
        'security-and-admin/totp-2fa',
        'security-and-admin/audit-logging',
        'security-and-admin/ssrf-and-network',
      ],
    },
    {
      type: 'category',
      label: '💡 Fehlerbehebung & FAQ',
      collapsed: false,
      items: [
        'troubleshooting/common-errors',
        'troubleshooting/faq',
      ],
    },
  ],
};

export default sidebars;
