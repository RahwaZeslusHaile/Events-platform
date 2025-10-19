import React from "react";
import "../componentStyle/EventFilter.css";

function EventFilter({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice }) {
  return (
    <div className="event-filter">
      <label>
        Category:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Sports">Charity</option>
          <option value="Education">Education</option>
          <option value="Community">Community</option>
          <option value="Culture">Culture</option>
          <option value="Arts & Theatre">Arts & Theatre</option>
          <option value="Music">Music</option>

        </select>
      </label>

      <label>
        Price:
        <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="">All</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
          <option value="Pay as you feel">Pay as you feel</option>
        </select>
      </label>
    </div>
  );
}

export default EventFilter;
