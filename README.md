# 🎉 Events Platform

      Live demo: https://events-platform-project.netlify.app

      A community events app (MVP: create, sign up, add to calendar).


## Quick test credentials

      If you want to test without creating an account, use these sample accounts (local/demo only):

      - Staff (can create events): staff@example.com / 1234
      - Member: member@example.com / 1234

      Note: on a fresh local server the demo accounts might not exist — use the Sign up page to create them.

## 🚀 Running Locally

1. Clone the repositories

      # Frontend
      git clone https://github.com/RahwaZeslusHaile/Events-platform

      # Backend (server is a separate repo inside `server/`)
      git clone https://github.com/RahwaZeslusHaile/BE-event-platform

2. Install dependencies

      # Frontend
      cd Events-platform/client
      npm install

      # Backend
      cd ../server
      npm install

3. Set up your environment variables

      The client is a Create-React-App app and therefore expects env vars prefixed with `REACT_APP_`.

      # client/.env (create this file)
      REACT_APP_API_URL=http://localhost:5000
      REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
      REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
      REACT_APP_GOOGLE_API_KEY=your_google_api_key

      # server/.env (create this file)
      PORT=5000
      STRIPE_SECRET_KEY=your_stripe_secret_key
      TICKETMASTER_API_KEY=your_ticketmaster_key
      JWT_SECRET=some_long_random_secret

      Notes:
      - When deployed, set `REACT_APP_API_URL` in your Netlify (or host) environment to point at your backend (e.g., https://your-backend.onrender.com).
      - Stripe keys: use test keys in development. Update success/cancel URLs in the server to production URLs when you deploy.

4. Start the servers

      Run each in a separate terminal:

      # Backend server
      cd server
      node server.js

      # Frontend
      cd client
      npm start

5. 💳 Stripe Integration

      This project uses Stripe Checkout for paid events. The backend exposes `/create-checkout-session` which creates a Stripe Checkout session and responds with `{ url }` that the frontend uses to redirect the user.

      - Frontend: `client/src/components/EventCard.jsx` loads Stripe with the publishable key and POSTs to `/create-checkout-session` on your API base URL.
      - Backend: `server/server.js` implements the session creation using the secret key.

      Use Stripe test card: 4242 4242 4242 4242 to simulate successful payments.


 ### 🎟️ Ticketmaster API Integration

   Fetches real events happening in Manchester.
  
    *  Backend URL:
      https://app.ticketmaster.com/discovery/v2/events?apikey=YOUR_TICKETMASTER_API_KEY&city=MANCHESTER

    *  Frontend URL:
      http://localhost:5000/api/events

   ## How it Works

    1.  Backend fetches Ticketmaster events.

    2.  Simplifies data: title, date, venue, image, price type.

    3.  Frontend displays events using useTicketmasterEvents.js.

    4.  If Ticketmaster fails, mock events are automatically added for testing.

      Tip: You can still test without a Ticketmaster key using mock events.


### Google sign-in and COOP header (Netlify)

      When using Google sign-in via the gapi popup on Netlify you may see errors like:

      ```
      Cross-Origin-Opener-Policy policy would block the window.closed call
      ```

      This happens because modern browsers' COOP/COEP policies can block cross-origin popups from closing properly. To fix this on Netlify, add a `_headers` file at the project root or inside the `client` folder (which will be included in the build) with this content:

      ```
      /*
         Cross-Origin-Opener-Policy: same-origin-allow-popups
      ```

      Netlify will serve that header for all pages and allow the Google popup flow to work.
      ---

## 🌐 Live Demo

      You can access the live version here:
      👉 [Events Platform on Netlify](https://events-platform-project.netlify.app/)

      ---

## 📁 Project Structure

    events-platform/
      │── client/
      │     ├── public/                # Static assets
      │     ├── src/
      │     │   ├── components/        # Reusable UI components
      │     │   ├── pages/             # Page components
      │     │   ├── hooks/             # Custom React hooks
      │     │   ├── data/              # Mock events data
      │     │   ├── componentStyle/    # CSS files
      │     │   ├── App.js
      │     │   └── index.js
      │
      ├── server/
      │     ├── server.js              # Express backend
      │     └── .env                   # API keys & env variables
      │
      ├── package.json
      └── README.md


## 🧩 Core Features

      *   Home Page: Welcome and featured events

      *   Events Page: Event list with filters and search

      *   My Events Page: User-signed events list

      *   Create Event Page (Staff only): Add new events

      *   Ticketmaster Integration: Real-time event fetching with fallback mock data

      *   Role-Based Login: Staff can create events, Members can browse and sign up

      *   Google Calendar Integration: Add events with one click

      *   Stripe Integration: Paid events handled via Stripe Checkout

---

## 🧪 Demo accounts & auth

The backend seeds demo users on first run (local only). If you start the server and there are no users, `server/server.js` writes `users.json` with two demo accounts:

- staff@example.com / 1234  (role: staff)
- member@example.com / 1234 (role: member)

Auth endpoints (backend):
- POST /api/signup  — body: { email, password, role }
- POST /api/login   — body: { email, password }
- GET  /api/me      — requires Authorization: Bearer <token>

The frontend stores the JWT in localStorage for the demo app. For production, consider httpOnly cookies instead.

## API endpoints used by the frontend

- GET  /api/events                      — fetches events (Ticketmaster + mocks)
- POST /create-checkout-session         — create Stripe Checkout session (body: { title, price })
- POST /api/signup, /api/login, /api/me — auth flows

## Netlify & Google Calendar (COOP) notes

If you deploy the frontend to Netlify and use Google Calendar popup flows (gapi), you must:

1. Add a `_headers` file in `client/public/` with the following content so Netlify serves the COOP header for all pages:

```
/*
      Cross-Origin-Opener-Policy: same-origin-allow-popups
```

2. In the Google Cloud Console for your OAuth Client ID, add the exact production origin (including protocol) to **Authorized JavaScript origins** (for example `https://your-site.netlify.app`) and any redirect URIs you use.

If you still see frame/403 errors after adding COOP, confirm:
- The `_headers` file is present in the published build (it must be in `client/public` before build).
- The origin in the failing request exactly matches the OAuth client configuration (protocol + host + optional port). Copy the `origin=` or `redirect_uri=` value from the browser network panel and paste it into the Google Console.

## Deployment notes

- Frontend (Netlify): connect the GitHub repo and set the build command to `npm run build` and publish directory to `client/build`. Add the following environment variables in Netlify:
      - `REACT_APP_API_URL` — URL of your backend (e.g., https://your-backend.onrender.com)
      - `REACT_APP_STRIPE_PUBLIC_KEY`, `REACT_APP_GOOGLE_CLIENT_ID`, `REACT_APP_GOOGLE_API_KEY`

- Backend (Render / Railway): deploy the `server` directory as a Node service and set env vars:
      - `STRIPE_SECRET_KEY`, `TICKETMASTER_API_KEY`, `JWT_SECRET`, `PORT`

## Notification system (developer note)

This app provides a small global notification system. Use the hook `useNotification()` from `client/src/components/NotificationProvider.jsx` to show toasts from any component:

```js
import { useNotification } from './components/NotificationProvider.jsx';
const notify = useNotification();
notify('Saved!', 'success');
```

The provider is already mounted in `index.js` so notifications will render without extra setup.

## Troubleshooting

- If events don't load, ensure the backend is running and `REACT_APP_API_URL` points to it. Check the browser console/network tab for the exact failing URL.
- If Stripe checkout fails, verify both the client and server Stripe keys are for the same account and that `success_url`/`cancel_url` are correct for your environment.
- For Google OAuth/Calendar errors, double-check the Authorized JavaScript origins and the COOP header described above.


## 🗓️ Development Roadmap

* [x] Setup project and routing
* [x] Build header, footer, and event list
* [x] Implement event filters and search
* [x] Create “My Events” page
* [x] Add login and role-based access
* [x] Implement Create Event form (Staff only)
* [x] Integrate Google Calendar API
* [x] Deploy final version and update documentation
* [x] Fetch real events from Ticketmaster API
* [x] Implement search and filters
* [x] Role-based login (staff vs member)
* [x] Responsive design
* [x] Payment system (Stripe) for paid events


---

## 🌟 Future Features

* Persistent login (using localStorage or backend authentication)

---

## 👩‍💻 Author

**Rahwa Zeslus Haile**
[GitHub Profile](https://github.com/RahwaZeslusHaile)
