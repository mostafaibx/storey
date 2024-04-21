# Coffee Shop

CoffeeShop is a fullstack showcase web application built with React, Typescript, and Strapi as a headless CMS.

# OverView

In this project I tried to focuse on building a clean & well structured Application using the best practicies. Check [[# Folder Structure]]
Instead of using a global state management libraries, I followed an approach of a mix of custom hooks and props for managing state, Data fetching and caching are handled with Tanstack Query, providing more maintainable code. Along with that I used Strapi Headless CMS and built custome API routes to handle my project requirements. And, Integrated with Google Maps API for better user experince with adding addresses.
The Front-end is hosted on Vercel, and Back-end is hosted on Render

## LIVE PREV: https://coffeeshop-zeta.vercel.app/
## BACKEND Repo: https://github.com/mostafaibx/Strapi_Backend_CoffeeShop_Ecommerce

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

  
### Backend:

- Strapi

## Main Features

- User Authentication:
  - Login & Signup with Credintials & ptoviders like Github 
  - Logout
- E-commerce Core Functionality:
  - Add / Remove items to / From cart
  - Create & Store Orders when the user checkout
  - Track & Manage Orders
- User Profile:
  - Change Password
  - Reset Password
  - Change user details
- User Address:
  - Add / Remove address
  - Use different addresses
  - Integrated with Google Maps API to suggest address based on geolocation
- Checkout & Payment
  - Mock payment page is implemented 


## Features I am currently working on:
- Testing:
  - Adding Unit tests using Vitest.
- Offline mode:
  - Adding Network provider
  - Implement Queue mutation & optimistic updates for offline mode.
- Integrate with Stripe for Real & more secure payment experince
- Performance Optimization:
  - Lazy Loading
  - Debouncing and Throttling
  - Memoization and Memoized Selectors
- Accessibility:
  - Use Semantic HTML
  - Use ARIA Roles to define the role of elements on the page.
  - ARIA States and Properties to convey additional information about interactive elements
