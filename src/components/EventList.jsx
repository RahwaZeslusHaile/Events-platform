import React, { useState } from "react";
import EventCard from "./EventCard.jsx";
import EventFilter from "./EventFilter.jsx";
import EventSearch from "./EventSearch.jsx";
import "../componentStyle/EventList.css";

function EventList({ events, addEvent }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      selectedCategory === "" || event.category === selectedCategory;

    const matchesPrice =
      selectedPrice === "" || event.priceType === selectedPrice;

    const matchesSearch =
      searchTerm === "" ||
      event.title.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div>
      <EventSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <EventFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />

      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} onSignUp={() => addEvent(event)} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export default EventList;
