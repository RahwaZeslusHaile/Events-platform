# 🎉 Events Platform

A community events app (MVP: create, sign up, add to calendar).

---

## 🚀 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone front-end :https://github.com/RahwaZeslusHaile/Events-platform
             back-end :https://github.com/RahwaZeslusHaile/BE-event-platform
   ```

2. **Navigate into the project folder**

   ```bash
   cd events-platform
   ```

3. **Install dependencies**

   ```bash
   cd client
     npm install
   cd server
     npm install
   ```
4. **Set up your environment variables**
       ```bash
       TICKETMASTER_API_KEY=your_api_key_here
      ```


5. **### 💳 Stripe Integration**

      This project uses Stripe Checkout to handle event payments.  
      The backend (server.js) creates a checkout session using the secret key.  
      The frontend (EventCard.jsx) loads Stripe using the public key and redirects users to Stripe’s payment page.

      Environment variables:
      - `VITE_STRIPE_PUBLIC_KEY` in `/client/.env`
      - `STRIPE_SECRET_KEY` in `/server/.env`

      Use Stripe test card `4242 4242 4242 4242` to simulate a successful payment.


6. ### 🎟️ Ticketmaster API Integration

   This project uses the **Ticketmaster Discovery API** to fetch live events happening in Manchester.

   #### 🔗 API Endpoint
   The backend (`server.js`) calls: https://app.ticketmaster.com/discovery/v2/events?apikey=YOUR_TICKETMASTER_API_KEY&city=MANCHESTER

   The server processes the raw data and simplifies it before sending it to the frontend at:GET /api/events
 
   you need a `.env` file in your server folder with:TICKETMASTER_API_KEY=your_real_ticketmaster_key


   #### 💡 How It Works
   - The backend fetches events from Ticketmaster.
   - It cleans and simplifies the data (title, date, venue, image, price type, etc.).
   - The frontend (`useTicketmasterEvents.js`) fetches from `http://localhost:5000/api/events` and displays the events.
   - If Ticketmaster fails, mock events are added for testing.

   #### 🧪 Testing Tip
   If you don’t have a real Ticketmaster key, you can still run the project using the **mock events** that are included in the backend.


7. **Start the backend server**

   ```bash
   npm run server
   ```
8. **Start the frontend**

   ```bash
   npm start
   ```

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

```
events-platform/
│── client/
│     ├── public/.                   # Static assets
│     │                       
│     ├── src/
│     │   ├── components/            # Reusable UI components (Header, EventCard, etc.)
│     │   ├── pages/                 # Page components (Home, Events, MyEvents, CreateEvent)
│     │   ├── hooks/                 # Custom React hooks (useTicketmasterEvents)
│     │   ├── data/                  # Mock events data
│     │   ├── componentStyle/        # CSS modules for each component
│     │   ├── App.js                 # Main application entry point
│     │   └── index.js                # React DOM render
│
├── server/
│   ├── server.js                # Express backend server (fetches Ticketmaster data)
│   └── .env                     # API keys and environment variables
│
├── package.json
└── README.md

```

---

## 🧩 Core Features

* **Home Page:** Welcome section and featured events.
* **Events Page:** Displays event list with filters and search.
* **My Events Page:** Displays user-signed events.
* **Create Event Page (Staff only):** Add new events.
* **Event Fetching(Ticketmaster API):**
    Real-time event data fetched from Ticketmaster API.
    Automatically adds prices (Free / Paid / Pay-as-you-feel).
    Displays fallback mock data if needed.
* **Role-Based Login:** 
   Staff: Can create new events.
   Member: Can browse and sign up for events
* **Google Calendar Integration:** Add any event to your Google Calendar with one click..


---

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
