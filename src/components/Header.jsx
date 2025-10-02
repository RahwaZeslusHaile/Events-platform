
import React from "react";
import { Link } from "react-router-dom";
import "../componentStyle/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Events Platform</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/my-events">My Calendar</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
