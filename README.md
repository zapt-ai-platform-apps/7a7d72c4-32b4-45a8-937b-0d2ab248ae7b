# ZAPT.AI Landing Page

Welcome to the ZAPT.AI landing page. This app serves as the entry point for users to learn about ZAPT and get started on creating apps in minutes without coding.

## User Journeys

1. [Explore the Landing Page](docs/journeys/explore-landing-page.md) - Discover the features of ZAPT.AI and how to get started quickly.
2. [View Testimonials](docs/journeys/view-testimonials.md) - Read feedback from our satisfied users who have transformed their ideas with ZAPT.AI.
3. [Get Started with ZAPT](docs/journeys/get-started.md) - Begin your journey with ZAPT by signing up or logging in.
4. [Navigate the App](docs/journeys/navigate-the-app.md) - Explore the accessible and responsive navigation elements.
5. [Learn About Pricing and Technology](docs/journeys/learn-about-pricing-and-technology.md) - Understand our pay-as-you-go model and the technology powering ZAPT.

---

## Design Guidelines

Detailed design guidelines are available [here](docs/design-guidelines.md).

---

## Environment Variables

To run this app, you need to set the following environment variables:

- `VITE_PUBLIC_SENTRY_DSN` - Your Sentry DSN for error logging.
- `VITE_PUBLIC_APP_ENV` - The app environment (e.g., 'development', 'production').
- `VITE_PUBLIC_UMAMI_WEBSITE_ID` - Your Umami Analytics website ID.

Set these variables in a `.env` file at the root of the project.

---

## External Services

- **Sentry**: Used for error logging and monitoring.
- **Umami Analytics**: Used for tracking website analytics.
- **Progressier**: Used for adding PWA functionality to the app.