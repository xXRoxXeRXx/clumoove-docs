import React from 'react';
import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const targetUrl = useBaseUrl('/getting-started');
  return <Redirect to={targetUrl} />;
}
