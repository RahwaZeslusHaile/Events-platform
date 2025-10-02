
import React from "react";
import EventCard from "./EventCard";
import "../componentStyle/FeaturedEvents.css";

function FeaturedEvents() {
  return (
    <section className="featured-events">
      <h2>Featured Events</h2>
      <div className="event-cards">
        <EventCard title="Community Meetup" date="Oct 15" />
        <EventCard title="Charity Run" date="Oct 20" />
        <EventCard title="Book Club" date="Oct 25" />
      </div>
    </section>
  );
}

export default FeaturedEvents;
