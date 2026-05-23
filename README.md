# SHRI Ecosystem - Deployment Guide

This project is now optimized for deployment on Vercel.

## Structure
- `/shri-frontend`: Next.js frontend
- `/shri-backend`: Node.js/Express backend (configured as Vercel Serverless Functions)

## Necessary Steps for Deployment

### 1. Database Setup
- Create a MongoDB cluster (e.g., on MongoDB Atlas).
- Get your Connection String (MONGODB_URI).

### 2. Backend Deployment (Vercel)
- Navigate to the `shri-backend` directory.
- Run `vercel` or link to a new project in the Vercel Dashboard.
- **Environment Variables:**
  - `MONGODB_URI`: Your MongoDB connection string.
- The backend will be available at `https://your-backend-project.vercel.app`.

### 3. Frontend Deployment (Vercel)
- Navigate to the `shri-frontend` directory.
- Run `vercel` or link to a new project in the Vercel Dashboard.
- **Environment Variables:**
  - `NEXT_PUBLIC_API_URL`: Set this to `https://your-backend-project.vercel.app/api`.
- The frontend will be available at `https://your-frontend-project.vercel.app`.

### 4. Vercel Configuration Notes
- The backend uses `vercel.json` to route all traffic to `api/index.ts`, which wraps the Express app.
- The frontend uses the standard Next.js build process.

## Local Development
- **Backend:** `cd shri-backend && npm run dev`
- **Frontend:** `cd shri-frontend && npm run dev`

Make sure to create `.env` files in both directories for local development.
