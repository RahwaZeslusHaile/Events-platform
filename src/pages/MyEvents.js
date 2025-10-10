import React from "react";
import { Link } from "react-router-dom";

function MyEventsPage({ signedUpEvents, removeEvent }) {
  return (
    <div className="my-events-container">
      <h2>My Events</h2>
      {signedUpEvents.length === 0 ? (
        <p>You haven’t signed up for any events yet.</p>
      ) : (
        <ul className="my-events-list">
          {signedUpEvents.map((event) => (
            <li key={event.id} className="my-event-card">
              <div>
                <Link to={`/events/${event.id}`}>
                  <h3>{event.title}</h3>
                </Link>
                <p>{event.date}</p>
                <p>{event.priceType === "Paid" ? `${event.price}` : "Free"}</p>
              </div>
              <button
                className="cancel-button"
                onClick={() => removeEvent(event.id)}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyEventsPage;
