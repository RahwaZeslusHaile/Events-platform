import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EventDetailsPage({ events, addEvent }) {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundEvent = events.find((e) => e.id.toString() === id);
      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        setError("Event not found.");
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id, events]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{event.title}</h2>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Price:</strong> {event.priceType}</p>

      <button 
        onClick={() => addEvent(event)} 
        style={{ padding: "10px 15px", marginTop: "10px", cursor: "pointer" }}
      >
        Sign Up
      </button>
    </div>
  );
}

export default EventDetailsPage;
