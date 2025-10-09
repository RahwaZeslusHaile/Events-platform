import React from "react";
import "../componentStyle/EventCard.css";

export default function EventCard({ id, title, description, date, priceType,price, category, onSignUp }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Category:</strong> {category}</p>
      <p>
        <strong>Price:</strong>{" "}
        {priceType === "Free"
          ? "Free"
          : priceType === "Paid"
          ? `$${price}`
          : "Pay as you feel"}
      </p>
      <button 
        onClick={() => onSignUp({ id, title, description, date, priceType, price,category })}
      >
        Sign Up
      </button>
    </div>
  );
}
