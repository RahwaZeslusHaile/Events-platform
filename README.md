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
   npm install
   ```

4. **Start the development server**

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
│
├── public/                # Static assets
├── src/
│   ├── components/         # Reusable UI components (Header, EventCard, etc.)
│   ├── pages/              # Page components (Home, Events, MyEvents, CreateEvent)
│   ├── data/               # JSON data (event.json)
│   ├── componentStyle/     # CSS files for individual components
│   ├── App.js              # Main application entry
│   └── index.js            # React DOM render point
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
* **Login Page (coming soon):** Simple role-based login for staff and members.
* **Responsive design:** Works on desktop and mobile screens.

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

---

## 🌟 Future Features

* Event creation by staff
* Event sign-up by members
* Google Calendar integration
* Payment system (Stripe) for paid events
* Persistent login (using localStorage or backend authentication)

---

## 👩‍💻 Author

**Rahwa Zeslus Haile**
[GitHub Profile](https://github.com/RahwaZeslusHaile)
