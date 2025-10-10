import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Home.js";
import EventsPage from "./pages/Events.js";
import MyEventsPage from "./pages/MyEvents.js";
import CreateEventPage from "./pages/CreateEventPage.js";
import EventDetailsPage from "./pages/EventDetails.js";
import LoginPage from "./pages/LoginPage.js";
import useTicketmasterEvents from "./hooks/useTicketmasterEvents.js";

function App() {
  const { events, loading, error } = useTicketmasterEvents();
  const [signedUpEvents, setSignedUpEvents] = useState([]);
  const [user, setUser] = useState(null);

  const addEvent = (event) => {
    if (!signedUpEvents.find((e) => e.id === event.id)) {
      setSignedUpEvents([...signedUpEvents, event]);
    }
  };

  const removeEvent = (id) => {
    setSignedUpEvents(signedUpEvents.filter((e) => e.id !== id));
  };

  const addNewEvent = (event) => {
   
  };

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                events={events}
                addEvent={addEvent}
                loading={loading}
                error={error}
              />
            }
          />
          <Route
            path="/events"
            element={
              <EventsPage
                events={events}
                addEvent={addEvent}
                loading={loading}
                error={error}
              />
            }
          />
          <Route
            path="/my-events"
            element={
              <MyEventsPage
                signedUpEvents={signedUpEvents}
                removeEvent={removeEvent}
              />
            }
          />
          <Route
            path="/events/:id"
            element={<EventDetailsPage events={events} addEvent={addEvent} />}
          />
          <Route
            path="/create"
            element={<CreateEventPage addNewEvent={addNewEvent} />}
          />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
