# EventLab — Event Management App

A Next.js (App Router) event management project with authentication (NextAuth) and MongoDB Atlas persistence. Users can browse events, and authenticated users can add/manage events via protected dashboard routes.

## Key Features

- **Authentication**: NextAuth with Google login and Credentials (email/password)
- **MongoDB Atlas**: Stores users and events in MongoDB (`event_management` database)
- **Events API**: Create and fetch events via `/api/events`
- **Protected Dashboard Pages**: Middleware-protected `/add-events` and `/manage-events`
- **UI**: Tailwind-styled pages including Events list, Popular Events, Add Event, Manage Events

## Setup & Installation

### Prerequisites

- Node.js (LTS recommended)
- A MongoDB Atlas cluster + database user
- Google OAuth credentials (optional, only if using Google login)

### 1) Install dependencies

```bash
npm install
```

### 2) Create environment variables

Create a `.env.local` file in the project root:

```bash
DB_URI="mongodb+srv://<user>:<password>@<cluster-host>/event_management?retryWrites=true&w=majority"

NEXTAUTH_SECRET="replace-with-a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

Notes:

- **`DB_URI`** must be a real Atlas connection string (not `mongodb://localhost...`).
- The app uses the DB name **`event_management`**.
- If you don’t want Google login, you can omit `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET`.

### 3) Run the app locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Route Summary

### Pages (App Router)

- **`/`**: Home page
- **`/events`**: Events listing page (loads from events API)
- **`/add-events`**: Add event form (**protected**)
- **`/manage-events`**: Manage/delete events (**protected**)
- **`/login`**: Login page
- **`/register`**: Register page

### API Routes

- **`/api/events`**
  - `GET`: Fetch all events
  - `POST`: Create one or many events
- **`/api/events/[id]`**
  - `GET`: Fetch a single event by MongoDB `_id`
  - `DELETE`: Delete a single event by MongoDB `_id`
- **`/api/register`**
  - `POST`: Create a user (email/password)
- **`/api/auth/[...nextauth]`**
  - NextAuth handler (Google + Credentials)

### Middleware (Route Protection)

- `src/middleware.js` protects:
  - `/add-events/*`
  - `/manage-events/*`

## Deploy (Vercel)

1. Push the repo to GitHub
2. Import into Vercel
3. Set Vercel Environment Variables:
   - `DB_URI`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your deployed URL)
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (if using Google login)
4. Deploy
