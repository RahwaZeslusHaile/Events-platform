import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import MyEventsPage from "./pages/MyEvents";
import CreateEventPage from "./pages/CreateEventPage";
import eventsData from "./data/event.json";
import EventDetailsPage from "./pages/EvenDetails";
import LoginPage from "./pages/LoginPage"; // fixed

function App() {
  const [allEvents, setAllEvents] = useState(eventsData);
  const [signedUpEvents, setSignedUpEvents] = useState([]);
  const [user, setUser] = useState(null);

  const addNewEvent = (event) => {
    setAllEvents([...allEvents, event]);
  };

  const addEvent = (event) => {
    if (!signedUpEvents.find((e) => e.id === event.id)) {
      setSignedUpEvents([...signedUpEvents, event]);
    }
  };

  const removeEvent = (id) => {
    setSignedUpEvents(signedUpEvents.filter((e) => e.id !== id));
  };

  return (
    <Router>
      <Header user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/events"
          element={<EventsPage events={allEvents} addEvent={addEvent} />}
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
          element={
            <EventDetailsPage 
              events={allEvents} 
              addEvent={user ? addEvent : null} 
            />
          }
        />
        <Route
          path="/create"
          element={
            user?.role === "staff" ? (
              <CreateEventPage addNewEvent={addNewEvent} />
            ) : (
              <div style={{ padding: "20px", textAlign: "center" }}>
                Access Denied: Staff Only
              </div>
            )
          }
        />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
