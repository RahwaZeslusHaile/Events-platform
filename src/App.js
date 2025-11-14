import React, { useState } from "react";
import { useNotification } from "./components/NotificationProvider.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Home.js";
import EventsPage from "./pages/Events.js";
import MyEventsPage from "./pages/MyEvents.js";
import CreateEventPage from "./pages/CreateEventPage.js";
import EventDetailsPage from "./pages/EventDetails.js";
import LoginPage from "./pages/LoginPage.js";
import SignupPage from "./pages/SignupPage.js";
import useTicketmasterEvents from "./hooks/useTicketmasterEvents.js";
import Footer from "./components/Footer.jsx";

function App() {
  const { events: ticketmasterEvents, loading, error } = useTicketmasterEvents();
  const [localEvents, setLocalEvents] = useState([]); 
  const [signedUpEvents, setSignedUpEvents] = useState([]);
  const [user, setUser] = useState(null);
  const notify = useNotification();

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Not authenticated");
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.log("Auto login failed", err.message);
        localStorage.removeItem("token");
      }
    })();
  }, [API_BASE]);

  const addEvent = (event) => {
    if (!signedUpEvents.find((e) => e.id === event.id)) {
      setSignedUpEvents([...signedUpEvents, event]);
      if (event.priceType === "Paid" || event.priceType === "Pay as you feel") {
        notify(`You're registered for "${event.title}".`, "success");
      } else {
        notify(`Your "${event.title}" event is now in your calendar.`, "success");
      }
    }
  };

  const removeEvent = (id) => {
    setSignedUpEvents(signedUpEvents.filter((e) => e.id !== id));
  };

  const addNewEvent = (event) => {
    setLocalEvents([...localEvents, { ...event, id: Date.now().toString() }]);
  };

  const allEvents = [...localEvents, ...ticketmasterEvents];

  return (
    <Router>
  <Header user={user} setUser={setUser} />
      
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage events={allEvents} addEvent={addEvent} loading={loading} error={error} />
            }
          />
          <Route
            path="/events"
            element={
              <EventsPage events={allEvents} addEvent={addEvent} loading={loading} error={error} />
            }
          />
          <Route
            path="/my-events"
            element={
              <MyEventsPage signedUpEvents={signedUpEvents} removeEvent={removeEvent} />
            }
          />
          <Route
            path="/events/:id"
            element={<EventDetailsPage events={allEvents} addEvent={addEvent} />}
          />
          <Route
            path="/create"
            element={<CreateEventPage addNewEvent={addNewEvent} />}
          />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage setUser={setUser} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
