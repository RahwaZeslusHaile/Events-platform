import React, { useState, useEffect } from "react";
import EventList from "../components/EventList";

function EventsPage({ events, addEvent }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (events.length > 0) {
        setLoading(false);
      } else {
        setError("No events available.");
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [events]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return <EventList events={events} addEvent={addEvent} />;
}

export default EventsPage;
