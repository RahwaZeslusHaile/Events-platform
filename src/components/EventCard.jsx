import React from "react";
import "../componentStyle/EventCard.css";
import GoogleCalendarButton from "./GoogleCalendarButton.jsx";

export default function EventCard({ id, title, description, date, priceType, price, category, image, onSignUp }) {

  const eventDateTime = new Date(date + "T14:00:00").toISOString();

  const eventForCalendar = { id, title, description, date: eventDateTime };

  return (
    <div className="event-card">
      {image && <img src={image} alt={title} className="event-image" />}
      <h3>{title}</h3>
      {description && <p>{description}</p>} 
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Category:</strong> {category}</p>
      <p>
        <strong>Price:</strong>{" "}
        {priceType === "Free" ? "Free" : priceType === "Paid" ? `$${price}` : "Pay as you feel"}
      </p>
      <div className="event-card-buttons">
      <button onClick={() => onSignUp({ id, title, description, date, priceType, price, category })}>
        Sign Up
      </button>
      <GoogleCalendarButton event={eventForCalendar} />
      </div>
    </div>
  );
}
