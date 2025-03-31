# Shared Components

This directory contains UI components that are truly shared across multiple modules. 

Components in this directory should:

1. Not belong to any specific domain or feature
2. Be reusable in multiple contexts
3. Not depend on specific business logic
4. Implement purely presentational concerns

Examples of appropriate shared components:
- Buttons
- Form inputs
- Modals
- Loaders
- Cards

When a component starts to incorporate domain-specific logic or state, consider moving it to the appropriate module's UI folder.