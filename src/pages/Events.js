import React from "react";
import EventList from "../components/EventList.jsx";


function EventsPage({ events, addEvent, loading, error }) {
  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const allEvents = [ ...events];

  if (allEvents.length === 0) return <p>No events available.</p>;

  return (
    <main style={{ padding: "20px" }}>
      <h2>All Events</h2>
      <EventList events={allEvents} addEvent={addEvent} />
    </main>
  );
}

export default EventsPage;
