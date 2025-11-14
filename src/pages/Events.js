import React from "react";
import EventList from "../components/EventList.jsx";


function EventsPage({ events, addEvent, loading, error }) {
  if (loading) return <p>Loading events...</p>;
  if (error)
    return (
      <main style={{ padding: "20px" }}>
        <h2>All Events</h2>
        <p style={{ color: "red" }}>Failed to load events: {error}</p>
        <p>
          Try refreshing the page or check your network connection. <button onClick={() => window.location.reload()}>Retry</button>
        </p>
      </main>
    );

  const allEvents = [...events];

  if (allEvents.length === 0)
    return (
      <main style={{ padding: "20px" }}>
        <h2>All Events</h2>
        <p>No events available.</p>
      </main>
    );

  return (
    <main style={{ padding: "20px" }}>
      <h2>All Events</h2>
      <EventList events={allEvents} addEvent={addEvent} />
    </main>
  );
}

export default EventsPage;
