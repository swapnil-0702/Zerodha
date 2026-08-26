import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://zerodha-backend-4s7s.onrender.com/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          username,
          identifier,
          password,
        }),
      });

      const data = await response.json();
      console.log("SIGNUP DATA:", data);

      if (!response.ok) {
        setMessage(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      // Save JWT
      localStorage.setItem("token", data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Signup successful!");

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = "https://zerodha-dashboard-es2e.onrender.com";
      }, 500);

    } catch (error) {
      console.log(error);
      setMessage("Unable to connect to server");
    }

    setLoading(false);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        <h1>Create your Zerodha account</h1>

        <p className="signup-subtitle">
          Start investing and trading with Zerodha
        </p>

        <form onSubmit={handleSubmit}>

          {/* First Name */}
          <label>First Name</label>

          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          {/* Username */}
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Email or Mobile */}
          <label>Email or mobile number</label>

          <input
            type="text"
            placeholder="Enter email or mobile number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />

          {/* Password */}
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Signup button */}
          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign up"}
          </button>

        </form>

        {/* Message */}
        {message && (
          <p className="signup-message">
            {message}
          </p>
        )}

        {/* Login option */}
        <p className="login-option">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
