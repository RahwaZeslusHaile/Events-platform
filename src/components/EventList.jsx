
import React, { useState } from "react";
import EventCard from "./EventCard";
import EventFilter from "./EventFilter";
import EventSearch from "./EventSearch";
import eventsData from "../data/event.json";
import "../componentStyle/EventList.css";

function EventList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) => {
    return (
      (selectedCategory === "" || event.category === selectedCategory) &&
      (selectedPrice === "" || event.priceType === selectedPrice) &&
      (searchTerm === "" || event.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );
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
            <EventCard key={event.id} {...event} />
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export default EventList;
