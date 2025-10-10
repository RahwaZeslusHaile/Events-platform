import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/events", async (req, res) => {
  try {
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.TICKETMASTER_API_KEY}&keyword=music&locale=*&startDateTime=2025-10-09T00:00:00Z&city=MANCHESTER`;

    const response = await fetch(url);

    if (!response.ok) throw new Error("Failed to fetch from Ticketmaster");

    const data = await response.json();

    // ✅ Extract only the events array (or empty array if none)
    const events = data._embedded?.events || [];

    // ✅ Optional: simplify each event before sending
    const simplifiedEvents = events.map((event) => ({
      id: event.id,
      title: event.name,
      description: event.info || "No description available",
      date: event.dates?.start?.localDate,
      venue: event._embedded?.venues?.[0]?.name || "Unknown Venue",
    }));

    res.json(simplifiedEvents);
  } catch (err) {
    console.error("Error fetching events:", err);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
