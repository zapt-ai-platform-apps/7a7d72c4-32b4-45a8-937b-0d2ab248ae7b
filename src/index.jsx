import { render } from 'solid-js/web';
import App from './App';
import './index.css';
import * as Sentry from '@sentry/browser';
import posthog from 'posthog-js';

Sentry.init({
  dsn: import.meta.env.VITE_PUBLIC_SENTRY_DSN,
  environment: import.meta.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'frontend',
      projectId: import.meta.env.VITE_PUBLIC_APP_ID,
    },
  },
});

// Umami Analytics
if (!window.location.hostname.includes('vercel.app')) {
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.setAttribute('data-website-id', import.meta.env.VITE_PUBLIC_UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}

if (import.meta.env.VITE_PUBLIC_APP_ENV === 'production') {
  posthog.init('phc_48kEQafERMa4F0PMBlYaH5VIr4pK3M52tpWdeODmcKr', { api_host: 'https://eu.posthog.com' });
  // posthog.capture('my event', { property: 'value' })
}

render(() => <App />, document.getElementById('root'));