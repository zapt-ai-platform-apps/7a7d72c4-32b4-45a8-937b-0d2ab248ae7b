# Setup Guide

## Environment Variables

To run this app, you need to set the following environment variables:

- `VITE_PUBLIC_SENTRY_DSN` - Your Sentry DSN for error logging.
- `VITE_PUBLIC_APP_ENV` - The app environment (e.g., 'development', 'production').
- `VITE_PUBLIC_UMAMI_WEBSITE_ID` - Your Umami Analytics website ID.
- `COCKROACH_DB_URL` - Your CockroachDB connection URL.
- `NPM_TOKEN` - Your NPM authentication token.
- `VITE_PUBLIC_APP_ID` - Your ZAPT application ID.

Set these variables in a `.env` file at the root of the project.

---

## External Services

- **Sentry**: Used for error logging and monitoring.
- **Umami Analytics**: Used for tracking website analytics.
- **Progressier**: Used for adding PWA functionality to the app.
- **Intercom**: Used for customer support chat.