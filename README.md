# UnRoasted - Coffee Community Platform

> **Status**: Archived / On Hold (Last Updated: December 2024)
> 
> This project is currently on hold. The codebase is preserved for reference but is not actively maintained.

## 📋 Project Overview

UnRoasted is a React-based coffee community platform that combines blog functionality, community features, and user management. The platform allows users to read articles, participate in a community bulletin board, and includes an admin dashboard for content management.

## 📸 Screenshots

| Home | Story |
|:----:|:-----:|
| ![Home](./public/screenshots/homepage.png) | ![Story](./public/screenshots/story.png) |

| Community | Authentication |
|:---------:|:--------------:|
| ![Community](./public/screenshots/community.png) | ![Auth](./public/screenshots/authentication.png) |

## 🏗️ Architecture

### Frontend
- **Framework**: React 18.3.1
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM 7.3.0
- **State Management**: React Context API (AuthContext)
- **UI Components**: Custom components + Headless UI

### Backend Services
- **CMS**: Strapi - Content management for blog articles
- **Database**: Firebase Firestore - User data, posts, community content
- **Authentication**: Firebase Auth
- **Server**: Express.js - Custom API endpoints

### Key Dependencies
- Firebase (Authentication & Firestore)
- Strapi (Headless CMS)
- Framer Motion (Animations)
- React Hot Toast (Notifications)
- Marked (Markdown parsing)

## ✨ Current Features

### ✅ Implemented
1. **Homepage**
   - Hero section with parallax effects
   - About/Story section
   - Blog preview section (3 latest articles)
   - Join section

2. **Blog System**
   - Article listing page (protected route)
   - Individual article pages with markdown support
   - Article cards with cover images
   - Fetches from Strapi CMS

3. **Authentication**
   - Sign in/Sign up pages
   - Google OAuth integration
   - Password reset functionality
   - Protected routes
   - Admin role verification

4. **Community Features**
   - Bulletin board (community posts)
   - User interactions (likes, posts)

5. **Admin Dashboard**
   - User management table
   - Posts management table
   - Loading and error states
   - Admin-only route protection

6. **Story Page**
   - Coffee story/education content

### 🚧 Partially Implemented / Known Issues
- Error handling: Some components only log errors to console (Home.jsx, Blog.jsx) - needs user-facing error messages
- Loading states: Missing in some components
- Blog content management: Requires regular Strapi updates
- Dashboard features: Some TODOs remain (see Dashboard.todo)

### ❌ Not Implemented
- Payment integration (Stripe code exists but not fully integrated)
- Advanced search/filtering
- Dashboard pagination
- Email notifications
- Production deployment

## 📁 Project Structure
