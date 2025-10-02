
import React from "react";
import "../componentStyle/EventSearch.css";

function EventSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="event-search">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default EventSearch;
