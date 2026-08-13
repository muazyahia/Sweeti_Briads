# Sweeti Braids - Client Website 🌸✨

Welcome to the frontend repository for the **Sweeti Braids** platform! This is a modern, responsive, and beautifully designed web application built to provide a premium booking and browsing experience for a hair braiding salon.

## 🌟 Key Features
- **Modern & Responsive Design:** Glass-morphism UI elements, smooth scroll animations, and curated vibrant color palettes.
- **Dynamic Service Browsing:** Users can explore signature styles dynamically fetched from the API.
- **Interactive Image Gallery:** A high-quality photo gallery for past work, fully integrated with Cloudinary via the backend.
- **Seamless Booking System:** Clients can effortlessly request appointments directly from the website.
- **Client Reviews Integration:** Displays real verified client testimonials.

## 🛠️ Technology Stack
- **Framework:** Next.js (React)
- **Styling:** Vanilla CSS Modules (for highly customized and isolated styling)
- **Icons:** Lucide React
- **API Integration:** Custom fetch hooks connected to the Sweeti Braids NestJS Backend.

## 💻 Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- A running instance of the Sweeti Braids Backend API.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muazyahia/Sweeti_Briads.git
   cd Sweeti_Briads
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and specify your backend API URL:
   ```env
   NEXT_PUBLIC_API_URL=https://your-backend-api-url.com
   # Or for local development:
   # NEXT_PUBLIC_API_URL=http://localhost:4000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## ☁️ Deployment (Vercel)
This project is fully ready for one-click deployment on **Vercel**.
1. Import this repository in your Vercel Dashboard.
2. In the Vercel project settings, go to **Environment Variables** and add `NEXT_PUBLIC_API_URL` pointing to your deployed backend.
3. Deploy! Vercel will automatically configure the build settings for Next.js.
