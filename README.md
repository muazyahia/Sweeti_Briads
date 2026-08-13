# Sweeti Braids - Client Website

Frontend for **Sweeti Braids**, a modern and responsive hair braiding salon platform designed to provide clients with a smooth browsing experience and an easy appointment booking process.

## Live Demo

**Frontend:** https://sweeti-briads.vercel.app/

**Backend API:** https://sweeti-briads-backend.vercel.app/

**Frontend Repository:** https://github.com/muazyahia/Sweeti_Briads

**Backend Repository:** https://github.com/muazyahia/SweetiBriads_BackEnd

---

## Technologies

| Technology   | Description                                  |
| ------------ | -------------------------------------------- |
| Next.js      | React framework for building the application |
| React        | Component-based UI development               |
| CSS Modules  | Scoped and customized component styling      |
| Lucide React | UI icons                                     |
| REST API     | Communication with the backend               |
| Cloudinary   | Image hosting and media management           |
| Vercel       | Deployment and hosting                       |

---

## Features

* Responsive and modern user interface
* Dynamic hairstyle and service browsing
* Interactive image gallery
* Cloudinary-powered image management
* Online appointment booking
* Client reviews and testimonials
* Smooth scrolling and UI animations
* Glassmorphism-based interface elements
* REST API integration with the backend

---

## Project Structure

```text
src/
├── app/
├── components/
├── hooks/
├── services/
├── styles/
└── config/
```

---

## Installation

### Requirements

* Node.js v18 or later
* Sweeti Braids Backend API

### Clone the Repository

```bash
git clone https://github.com/muazyahia/Sweeti_Briads.git
cd Sweeti_Briads
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

For the deployed backend:

```env
NEXT_PUBLIC_API_URL=https://sweeti-briads-backend.vercel.app
```

### Run the Application

```bash
npm run dev
```

The application will run on:

```text
http://localhost:3000
```

---

## Deployment

The project is ready for deployment on **Vercel**.

Add the following environment variable in your Vercel project settings:

```env
NEXT_PUBLIC_API_URL=https://sweeti-briads-backend.vercel.app
```

After configuring the environment variable, deploy the project through Vercel.

---

## Backend

The frontend communicates with the **Sweeti Braids Backend API**, built with NestJS and responsible for managing services, gallery content, bookings, reviews, and other application data.

**Backend API:** https://sweeti-briads-backend.vercel.app/

**Backend Repository:** https://github.com/muazyahia/SweetiBriads_BackEnd

---

## Architecture

* Component-Based Architecture
* Next.js Application Architecture
* REST API Integration
* Reusable UI Components
* Responsive Design
* Scoped CSS Modules
* Cloudinary Media Integration
* Production Deployment with Vercel

---

## License

This project is developed for the Sweeti Braids platform.
Developed by Moa'az Yahia
