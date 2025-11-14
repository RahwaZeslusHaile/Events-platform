import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentStyle/LoginPage.css";
import { useNotification } from "../components/NotificationProvider.jsx";

function SignupPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("member");
  const navigate = useNavigate();
  const notify = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Signup failed");

      localStorage.setItem("token", data.token);
      setUser(data.user);
      notify && notify("Account created", "success");
      navigate("/");
    } catch (err) {
      notify && notify(err.message, "error");
    }
  };

  return (
    <div className="login-container">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="member">Member</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <button type="submit">Create account</button>
      </form>
      {/* errors are shown via global notifications */}
    </div>
  );
}

export default SignupPage;
