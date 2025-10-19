import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../componentStyle/Header.css";

function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login"); 
  };

  return (
    <header className="header">
      <div className="logo">Events Platform</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/my-events">My Calendar</Link></li>
          {user ? (
            <>
              {user.role === "staff" && (
                <li><Link to="/create">Create Event</Link></li>
              )}
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Logout ({user.role})
                </button>
              </li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
