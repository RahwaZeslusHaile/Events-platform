# 🎉 Events Platform

A community events app (MVP: create, sign up, add to calendar).

---

## 🚀 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/RahwaZeslusHaile/Events-platform
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
5. **Start the backend server**

   ```bash
   npm run server
   ```
5. **Start the frontend**

   ```bash
   npm start
   ```
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

### two weeks

* [x] Setup project and routing
* [x] Build header, footer, and event list
* [x] Implement event filters and search
* [x] Create “My Events” page

### two weeks

* [ ] Add login and role-based access
* [ ] Implement Create Event form (Staff only)
* [ ] Integrate Google Calendar API
* [ ] Deploy final version and update documentation
* [ ] Fetch real events from Ticketmaster API
* [ ] Add dynamic price handling (Free / Paid / Pay-as-you-feel)
* [ ] Implement search and filters
* [ ] Role-based login (staff vs member)
* [ ] Responsive design


---

## 🌟 Future Features

* Payment system (Stripe) for paid events
* Persistent login (using localStorage or backend authentication)

---

## 👩‍💻 Author

**Rahwa Zeslus Haile**
[GitHub Profile](https://github.com/RahwaZeslusHaile)
