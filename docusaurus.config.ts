import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Clumoove Nutzerdokumentation',
  tagline: 'Schritt-für-Schritt Anleitungen für Cloud-Migration, Synchronisation & Speicher-Anbieter',
  favicon: 'img/favicon.ico',

  url: 'https://docs.clumoove.com',
  baseUrl: '/',

  organizationName: 'xXRoxXeRXx',
  projectName: 'clumoove-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
      de: {
        label: 'Deutsch',
      },
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['de', 'en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/clumoove_logo.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Clumoove Docs',
      logo: {
        alt: 'Clumoove Logo',
        src: 'img/clumoove_logo.svg',
      },
      items: [
        {
          href: 'https://clumoove.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/xXRoxXeRXx/clumoove',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projekt',
          items: [
            {
              label: 'Website',
              href: 'https://clumoove.com',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/xXRoxXeRXx/clumoove',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Clumoove. Open Source Cloud Migration & Sync.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['powershell', 'bash', 'json', 'yaml', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
