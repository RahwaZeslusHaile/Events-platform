import React, { useState } from "react";
import "../componentStyle/CreateEventPage.css";

function CreateEventPage({ addNewEvent }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [priceType, setPriceType] = useState("Free");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      description,
      date,
      location,
      category,
      priceType,
      price: priceType === "Paid" ? price : 0
    };
    addNewEvent(newEvent);
    setTitle("");
    setDescription("");
    setDate("");
    setLocation("");
    setCategory("");
    setPriceType("Free");
    setPrice("");
    alert("Event created!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
<input
  type="datetime-local"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  required
/>
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <br />
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
        <br />
        <label>
          Price Type:
          <select value={priceType} onChange={(e) => setPriceType(e.target.value)}>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </label>
        {priceType === "Paid" && (
          <>
            <br />
            <label>
              Price:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                required
              />
            </label>
          </>
        )}
        <br /><br />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEventPage;
