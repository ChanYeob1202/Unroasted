# Unroasted TODO

Fix the security issues now and keep the live site working. The bigger rebuild into a trainee onboarding tool waits until the Job Tracker backend rebuild is well underway.

## Now (alongside Job Tracker step 1)

- [x] Rotate the Strapi secrets on Render
- [x] Sync the local folder with GitHub (decide what to keep from uncommitted changes, then pull)
- [x] Stop tracking `unRoasted/.env`, `node_modules` and `data.db`; update `.gitignore`
- [x] Check the deployed Firestore rules (rewritten and deployed Oct 18: profiles private, role locked, posts author-only)

## Later (after the Job Tracker backend is well underway)

- [ ] Re-learn the structure and write a README with a diagram
- [ ] Decide the CMS question; keep one article source
- [ ] Clean up packages, lockfiles and the Firebase config location; fix `PublicRoutes`
- [ ] Write Firestore rules for `progress` (users and `community_posts` rules are done)
- [ ] Add the service layer
- [ ] Build roles, progress tracking, and quizzes
- [ ] Write 5-8 core articles
- [ ] Put real trainees through it and measure the time saved

## Known leftovers to clean up

- [ ] Remove unused `express`, `stripe`, `firebase-admin`, `cors`
- [ ] Remove the dev script pointing at a missing `server.js`
- [ ] Remove `TestDatabase.jsx` and the default CRA test
- [ ] Keep one lockfile (two exist)
- [ ] `PublicRoutes` reads `user` instead of `currentUser`, so signed-in users are not redirected
- [ ] Two extra article sources remain in code (Markdown file in `public/blog-posts`, JSX article pages)

## Product direction

Make the training tool the core and keep the community secondary. Only the training tool has real users waiting: RNY trainees, who read the basics before their first shift on bar so the same training is not repeated.

Resume goal: "cut on-bar training from X hours to Y hours across Z trainees."

### Training features

- Roles: trainee and manager
- Reading progress: which articles each trainee has finished
- A short quiz per article (3-5 questions)
- Manager view: who finished what, with quiz scores, before the first shift

### Data model

| Collection | Fields |
| --- | --- |
| Users | name, role (trainee or manager) |
| Articles | title, content, order in the training path |
| Progress | user, article, completed date, quiz score |

Firestore rules: trainees read and write only their own progress; managers read everyone's.

### CMS decision

Depends on who will write articles in the next year. If it is only me, Strapi's main benefit disappears.

| Option | Pros | Cons |
| --- | --- | --- |
| Keep Strapi | Real CMS experience; non-technical trainers could write articles | Two services to maintain (Strapi on Render + Neon); free tier sleeps; already migrated once |
| Markdown files in the repo | No extra server, free, simple; version-controlled | Only someone comfortable with Git can edit |
| Articles in Firestore | One system for everything | Need to build an editor screen |

### Code structure

- Organize by feature, not file type: `features/articles`, `features/training`, `features/community`, `features/auth`
- Service layer: components never call Firebase or Strapi directly; data access lives in files like `services/articles.js`
