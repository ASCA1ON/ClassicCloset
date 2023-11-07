# Classic Closet Admin Dashboard

This is the admin dashboard for the Classic Closet e-commerce project. It allows the admin to manage multiple online stores through a single CMS.

## Key Features

- Built with shadcn UI for a modern, intuitive admin UI
- Control multiple vendor/storefronts through a unified CMS 
- CRUD functionality for categories, products, filters, and billboards
- Upload multiple images per product
- Featured product functionality to showcase items on homepage
- Search through all catalog entities with pagination
- View orders, sales reports, and revenue graphs
- Clerk for authentication
- Stripe integration for checkout and webhooks
- Database with CockroachDB, PostgreSQL, and Prisma

## Tech Stack

### Frontend

- Next.js
- React
- Shadcn UI
- Axios
- clsx
- date-fns
- lucide-react
- next-cloudinary
- react-hook-form
- react-hot-toast 
- recharts
- Stripe
- Zod
- Zustand

### Backend 

- CockroachDB
- PostgreSQL
- Prisma

## Prerequisites

- **Node.js version 14.x** 

## Getting Started

### Cloning the repository

- git clone https://github.com/ASCA1ON/ClassicCloset-Admin.git

## Environment Variables in .env file

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in` 
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/`  
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/`
- `DATABASE_URL`
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`   
- `STRIPE_API_KEY`
- `FRONTEND_STORE_URL`  
- `STRIPE_WEBHOOK_SECRET`

### Install packages
- npm i 
### Connect to PlanetScale and Push Prisma 
- npx prisma generate 
- npx prisma db push 

### Start the app 
- npm run dev 


Now you're all set to explore and manage your e-commerce stores efficiently with Classic Closet Admin Dashboard. If you have any questions or encounter issues, feel free to reach out for support.

Enjoy using Classic Closet Admin Dashboard for your e-commerce business management!