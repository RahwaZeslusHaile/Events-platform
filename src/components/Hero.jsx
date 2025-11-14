
import React from "react";
import { useNavigate } from "react-router-dom";
import "../componentStyle/Hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <h1>Welcome to Our Community!</h1>
      <button className="hero-btn" onClick={() => navigate('/events')}>Find Events</button>
    </section>
  );
}

export default Hero;
