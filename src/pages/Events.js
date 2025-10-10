import React from "react";
import EventList from "../components/EventList.jsx";

function EventsPage({ events, addEvent, loading, error }) {
  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (events.length === 0) return <p>No events available.</p>;

  return (
    <main style={{ padding: "20px" }}>
      <h2>All Events</h2>
      <EventList events={events} addEvent={addEvent} />
    </main>
  );
}

export default EventsPage;
