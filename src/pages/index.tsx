import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started">
            Zur Handbuch-Übersicht 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Offizielle Nutzerdokumentation & Handbuch für Clumoove Multi-Cloud Migration & Sync">
      <HomepageHeader />
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--4 margin-bottom--lg">
            <h3>🚀 Erste Schritte</h3>
            <p>Installation per Docker Compose, Systemanforderungen und Ersteinrichtung des Administrator-Kontos.</p>
            <Link className="button button--outline button--primary" to="/getting-started/installation">
              Zur Installation →
            </Link>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <h3>🔌 Speicher-Anbieter</h3>
            <p>Anleitungen für Nextcloud, Google Drive, OneDrive Personal, Dropbox, HiDrive, Immich, S3 & SMB/SFTP.</p>
            <Link className="button button--outline button--primary" to="/storage-providers">
              Anbieter ansehen →
            </Link>
          </div>
          <div className="col col--4 margin-bottom--lg">
            <h3>💡 Fehlerbehebung & FAQ</h3>
            <p>Referenz aller Backend-Fehlercodes, Rate-Limits, 2FA-Wiederherstellung und häufig gestellte Fragen.</p>
            <Link className="button button--outline button--primary" to="/troubleshooting/common-errors">
              Zur Fehlerbehebung →
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
