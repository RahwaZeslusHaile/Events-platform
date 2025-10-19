
import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import "../componentStyle/EventCard.css";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "336567082439-96gj05qhchsicls1vl88of22abess319.apps.googleusercontent.com";
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || "AQ.Ab8RN6KUsjnTDAoPO0XdlwtXKzvh76AzBqkF2Z4DskfBUKMJ3w";
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export default function GoogleCalendarButton({ event }) {
  useEffect(() => {
    function start() {
      gapi.client.init({ apiKey: API_KEY, clientId: CLIENT_ID, scope: SCOPES });
    }
    gapi.load("client:auth2", start);
  }, []);

  const handleClick = () => {
    const GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signIn().then(() => {
      try {
        const startDate = new Date(event.date);
        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

        const request = gapi.client.calendar.events.insert({
          calendarId: "primary",
          resource: {
            summary: event.title,
            description: event.description,
            start: { dateTime: startDate.toISOString(), timeZone: "Europe/London" },
            end: { dateTime: endDate.toISOString(), timeZone: "Europe/London" },
          },
        });

        request.execute(() => alert("Event added to your Google Calendar!"));
      } catch (err) {
        console.error("Error adding to Google Calendar:", err);
        alert("Failed to add event. Check console for details.");
      }
    });
  };

  return <button className="google-calendar-btn" onClick={handleClick}>Add to Google Calendar</button>;
}
