import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import GoogleCalendarButton from "./GoogleCalendarButton.jsx";
import { useNotification } from "./NotificationProvider.jsx";
import "../componentStyle/EventCard.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export default function EventCard({
  id,
  title,
  description,
  date,
  priceType,
  price,
  category,
  image,
  onSignUp,
}) {
  const eventDateTime = new Date(date + "T14:00:00").toISOString();
  const eventForCalendar = { id, title, description, date: eventDateTime };

  const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const notify = useNotification();

  const handlePayment = async () => {
    try {
       await stripePromise;

      const response = await fetch(`${API_BASE}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, price }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url; 
      } else {
        notify && notify(`Unable to start checkout session: ${session.error || "unknown error"}`, "error");
      }
    } catch (error) {
      console.error("Payment error:", error);
      notify && notify(`Payment error: ${error.message || "Something went wrong"}`, "error");
    }
  };

  return (
    <div className="event-card">
      {image && <img src={image} alt={title} className="event-image" />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
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

      <div className="event-card-buttons">
        {priceType === "Paid" ? (
          <button onClick={handlePayment}>Pay & Sign Up</button>
        ) : (
          <button
            onClick={() =>
              onSignUp({ id, title, description, date, priceType, price, category })
            }
          >
            Sign Up
          </button>
        )}
        <GoogleCalendarButton event={eventForCalendar} />
      </div>
    </div>
  );
}
