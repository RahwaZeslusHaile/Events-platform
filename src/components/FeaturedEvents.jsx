import React from "react";
import EventCard from "./EventCard.jsx";
import "../componentStyle/FeaturedEvents.css";

function FeaturedEvents({ events, addEvent }) {
  if (!events || events.length === 0) {
    return <p>No featured events available.</p>;
  }

  const featuredEvents = events.slice(0, 3);

  return (
    <section className="featured-events">
      <h2>Featured Events</h2>
      <div className="featured-events-list">
        {featuredEvents.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            onSignUp={() => addEvent(event)}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedEvents;
