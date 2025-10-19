import { useState, useEffect } from "react";

function useTicketmasterEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("https://be-event-platform.onrender.com/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();

       
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return { events, loading, error };
}

export default useTicketmasterEvents;
