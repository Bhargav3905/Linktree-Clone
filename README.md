# 🌳 Bittree | Linktree Clone (Next.js + MongoDB)

A high-performance link-sharing platform built with Next.js. Users can claim a unique handle, add custom links with titles, and generate a personalized landing page.

## 🌟 Key Features
- **Dynamic User Profiles:** Personalized URLs based on claimed handles (e.g., `/yourname`).
- **Server-Side Rendering (SSR):** Profile pages are rendered on the server for instant loading and SEO.
- **Dynamic Form Handling:** Real-time addition/removal of link fields using React state.
- **MongoDB Integration:** Persistent storage for user profiles and link arrays.
- **Responsive Design:** Fully styled with Tailwind CSS for mobile and desktop.

## 🛠️ Technical Stack
- **Framework:** Next.js 15 (App Router)
- **Database:** MongoDB (via official MongoDB Node.js Driver)
- **Styling:** Tailwind CSS
- **Notifications:** React-Toastify

## 🏗️ Architecture
- **API Routes:** Handled via Next.js Route Handlers (`/api/add/route.js`).
- **Layout Management:** Custom `LayoutWrapper` to conditionally show/hide navigation based on the current path.
- **Database Singleton:** Efficient MongoDB connection pooling to prevent multiple connection overhead in development.

## 🚀 Getting Started
1. Clone the repo.
2. Add your `MONGODB_URI` to `.env.local`.
3. Run `npm install` and then `npm run dev`.