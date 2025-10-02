
import React from "react";
import "../componentStyle/EventCard.css";

function EventCard({ title, description, date, priceType, onSignUp }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Price:</strong> {priceType}</p>
      <button onClick={onSignUp}>Sign Up</button>
    </div>
  );
}

export default EventCard;
