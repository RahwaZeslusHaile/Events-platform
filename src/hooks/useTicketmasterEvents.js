import { useState, useEffect } from "react";

function useTicketmasterEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();

        const apiEvents = data._embedded?.events || [];

        const mapped = apiEvents.map((event) => ({
          id: event.id,
          title: event.name,
          description: event.info || event.pleaseNote || "No description available",
          date: event.dates?.start?.localDate || "Unknown date",
          location: event._embedded?.venues?.[0]?.name || "Unknown location",
          category: event.classifications?.[0]?.segment?.name || "Uncategorized",
          priceType: event.priceRanges ? "Paid" : "Free",
          image: event.images?.[0]?.url || null,
        }));

        setEvents(mapped);
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
