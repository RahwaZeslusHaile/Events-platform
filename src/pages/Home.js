import React from "react";
import Hero from "../components/Hero.jsx";
import FeaturedEvents from "../components/FeaturedEvents.jsx";


function HomePage({ events, addEvent, loading, error }) {
  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main>
      <Hero />
      <FeaturedEvents events={events} addEvent={addEvent} />
    </main>
  );
}

export default HomePage;
