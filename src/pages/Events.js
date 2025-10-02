
import React, { useState } from "react";
import EventList from "../components/EventList";
import eventsData from "../data/event.json";

function EventsPage() {
 
  const [events, setEvents] = useState(eventsData);

  return (
    <main>
      <h1>All Events</h1>
      <EventList events={events} />
    </main>
  );
}

export default EventsPage;
