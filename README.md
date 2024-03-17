# Coffee Shop

CoffeeShop is a fullstack showcase web application built with React, Typescript, and Strapi as a headless CMS.

## Folder Structure

- /src
  - /components // React components e.g. UI
  - /pages // React pages
  - /composables // Custom hooks e.g. useAuth, useCart, useUser
  - /utils // General utility functions e.g. TextSlicerFn, CookiesOptions
  - /api // API-related functions that are used in hooks for queries & mutation
  - /services // we have Cookies service
  - /providers // Context providers e.g. Network Statues Provider
  - /types // TypeScript types and interfaces
  - App.tsx
  - index.css

## Technologies Used

### Frontend:

- React with Vite
- Typescript
- Tanstack Query
- React Router
- Tailwind CSS
- Shaden
- Zod
- R3F

### Backend:

- Strapi

## Main Features

- User Authentication:
  - Login with email and password
  - Logout functionality
  - Signup with email and password
- E-commerce Functionality:
  - Add items to cart
  - Delete items from cart
