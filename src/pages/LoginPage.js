import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componentStyle/LoginPage.css";

function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = [
    { email: "staff@example.com", password: "1234", role: "staff" },
    { email: "member@example.com", password: "1234", role: "member" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setError("");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
  <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="current-email"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>
      <button className="login-container button" type="submit">Login</button>
    </form>
    {error && <p>{error}</p>}
  </div>
);

}

export default LoginPage;
