import React from "react";
import Hero from "../components/Hero.jsx";
import FeaturedEvents from "../components/FeaturedEvents.jsx";

function HomePage({ events, addEvent }) {
  const allEvents = [...events]; 
  return (
    <main>
      <Hero />
      <FeaturedEvents events={allEvents} addEvent={addEvent} />
    </main>
  );
}

export default HomePage;
