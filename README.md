# UnRoasted - Coffee Education & Community Platform

> Built by a coffee shop manager to solve a real training problem

## 🎯 The Problem

As a manager at RNY Coffee Studio, I was training 5-10 new baristas 
every few months. I faced three challenges:

1. **Repetitive Training** - Explaining the same coffee concepts 
   over and over
2. **No Continuous Learning** - After training ended, baristas had 
   nowhere to ask follow-up questions
3. **Isolated Learning** - Trainees couldn't learn from each other 
   or build a community

## 💡 The Solution

UnRoasted is a platform where:
- **Managers** can create educational content once and share it with 
  all trainees
- **Baristas** can read articles, ask questions, and discuss with peers
- **Coffee shops** can track employee learning and build a knowledge base

## 🌐 Live Demo
[https://unroasted.vercel.app](https://unroasted.vercel.app)

---

## 📸 Screenshots

| Home | Story |
|:----:|:-----:|
| ![Home](./public/screenshots/homepage.png) | ![Story](./public/screenshots/story.png) |

| Blog | Community |
|:----:|:---------:|
| ![Blog](./public/screenshots/blog.png) | ![Community](./public/screenshots/community.png) |

| Authentication |
|:--------------:|
| ![Auth](./public/screenshots/authentication.png) |

---

## ✨ Current Features

### 📚 Educational Content (Strapi CMS)
- Coffee education articles (extraction, milk steaming, bean origins)
- Markdown support for formatting
- Mobile-friendly reading experience
- Manager can publish from anywhere (phone, tablet, desktop)

### 💬 Community Discussion (Firebase)
- Bulletin board for Q&A between baristas
- Real-time updates when someone posts
- User authentication (safe, accountable discussions)
- Like and engage with helpful posts

### 👨‍💼 Admin Dashboard
- User management (promote trainees to moderators)
- Content moderation
- View community activity
- Manage permissions

### 🔐 Authentication
- Email/password and Google OAuth
- Role-based access (trainee, moderator, admin)
- Protected routes for members-only content

---

## 🛠️ Tech Stack

**Frontend:**
- React 18 - Dynamic, interactive user experience
- Tailwind CSS - Fast, consistent styling
- Framer Motion - Smooth animations

**Backend:**
- **Strapi CMS** - Content management (I can write articles from my phone!)
- **Firebase Auth** - User authentication
- **Firebase Firestore** - Real-time community discussions

**Deployment:**
- Vercel - Free hosting with instant deployment

---

## 🏗️ Architecture

Built with a multi-service architecture for flexibility:

```
        React Frontend (Vercel)
                 ↓
    ┌───────────────────────────┐
    │                           │
    ▼                           ▼
┌──────────┐              ┌───────────┐
│ Strapi   │              │ Firebase  │
│ CMS      │              │ Auth +    │
│ (Content)│              │ Firestore │
│          │              │(Community)│
└──────────┘              └───────────┘
     │                          │
     ▼                          ▼
┌──────────┐              ┌───────────┐
│PostgreSQL│              │ Google    │
│(Render)  │              │ Cloud     │
└──────────┘              └───────────┘
```

---

## 💼 Real-World Impact

**Tested with actual baristas at RNY Coffee Studio:**
- 8+ trainees have used the platform
- 20+ educational articles published
- Positive feedback on ease of use and community features
- Reduced my 1-on-1 training time by ~40%

---

## 🚀 Future Vision (B2B SaaS)

**The Plan:**

**Phase 1 (Current)** - MVP for RNY Coffee Studio
- ✅ Validate concept with real users
- ✅ Build content library
- ✅ Gather feedback

**Phase 2 (6 months)** - Multi-tenant SaaS
- [ ] Onboard 5-10 other coffee shops as beta customers
- [ ] Add white-label branding per shop
- [ ] Analytics dashboard (track employee progress)
- [ ] Pricing: $29-49/month per coffee shop

**Phase 3 (Future)** - Scale
- [ ] Certificate program (baristas earn credentials)
- [ ] Job marketplace (connect trained baristas with hiring shops)
- [ ] Mobile app for learning during shifts
- [ ] Expand to other hospitality industries (restaurants, hotels)

---

## 🎓 What I Learned

**Technical:**
1. Multi-service integration (Strapi + Firebase)
2. Role-based access control and authentication
3. Real-time database patterns with Firestore
4. Headless CMS architecture
5. Building admin dashboards for non-technical users

**Business:**
1. User research (talked to baristas, learned what they actually need)
2. MVP development (cut unnecessary features, focus on core value)
3. Product prioritization (education content > fancy features)
4. Thinking about monetization and scale from day one
5. Managing real users and gathering feedback

---

## 💡 Key Insights

**What worked:**
- Simple is better - baristas wanted articles and Q&A, not complex features
- Real-time community features create engagement
- Mobile-first design (baristas access on their phones)

**What I'd do differently:**
- Start with user interviews before building anything
- Add analytics from day one to track engagement
- Build pagination earlier (performance issues with 50+ articles)

---

## 🔮 Technical Improvements Needed

- [ ] Multi-tenancy for multiple coffee shops
- [ ] Learning management system (track completion, certificates)
- [ ] Email notifications (new posts, replies)
- [ ] Full-text search across articles
- [ ] Stripe integration for subscriptions
- [ ] Better error handling and user feedback
- [ ] Mobile app (React Native)

---

## 📊 Business Model

**Target Market:** 
- Independent coffee shops (10-50 employees)
- Small coffee chains (2-5 locations)
- Coffee training schools

**Value Proposition:**
- Reduce training time by 40%
- Scale knowledge across multiple locations
- Build company culture through community
- Track employee learning progress

**Revenue Model:**
- $29/month: Single location, up to 20 users
- $49/month: Multi-location, up to 50 users
- Enterprise: Custom pricing for chains

**Market Validation:**
- Coffee shop training is currently 100% manual
- No dedicated platforms for this niche
- Coffee industry is growing (15,000+ shops in US)

---

## 🏆 Why This Project Matters

This isn't just a coding project - it's a real solution to a real 
problem I experienced as a manager.

It demonstrates:
- ✅ Problem-solving (identified inefficiency in my work)
- ✅ User-centric thinking (built what baristas actually need)
- ✅ Technical skills (full-stack, multi-service integration)
- ✅ Business acumen (monetization strategy, market analysis)
- ✅ Leadership (training people, managing users)

I'm actively working on turning this into a revenue-generating 
product for the coffee industry.

---

## 🚀 Running Locally

```bash
# Clone the repository
git clone https://github.com/ChanYeob1202/Unroasted.git

# Navigate to project directory
cd Unroasted

# Install dependencies
npm install

# Set up environment variables
# Create .env file with your config:
# REACT_APP_API_KEY=your_firebase_api_key
# REACT_APP_AUTH_DOMAIN=your_project.firebaseapp.com
# REACT_APP_PROJECT_ID=your_project_id
# REACT_APP_STORAGE_BUCKET=your_project.appspot.com
# REACT_APP_MESSAGING_SENDER_ID=your_sender_id
# REACT_APP_APP_ID=your_app_id
# REACT_APP_STRAPI_URL=your_strapi_url

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📁 Project Structure

```
Unroasted/
├── src/
│   ├── components/       # React components (layouts, forms, cms, etc.)
│   ├── contexts/         # Context providers (AuthContext)
│   ├── pages/            # Page components (Home, Blog, Community)
│   ├── hooks/            # Custom React hooks (useAuth, useFetchApi)
│   ├── lib/              # External service configs (Firebase)
│   ├── ui/               # Reusable UI components
│   └── data/             # Static data and content
├── public/               # Static assets and images
└── strapi/               # Strapi CMS backend
```

---

## 🤝 Connect With Me

**Built with ☕ by a coffee manager who codes**

- **GitHub:** [@ChanYeob1202](https://github.com/ChanYeob1202)
- **LinkedIn:** [Michael Kim](https://www.linkedin.com/in/michael-kim-3514a9314/)
- **Portfolio:** [michaelkimdev.com](https://michaelkimdev.com/)
