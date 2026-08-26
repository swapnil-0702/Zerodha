import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://zerodha-backend-4s7s.onrender.com/login", {
        method: "POST",

        // Important for login session/cookie
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");

        setLoading(false);
        return;
      }

      // Save JWT
      localStorage.setItem("token", data.token);

      // Save logged-in user
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful!");

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
        <h1>Login to Zerodha</h1>

        <p className="signup-subtitle">Login to continue trading</p>

        <form onSubmit={handleSubmit}>
          {/* Username */}

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          {/* Login button */}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Message */}

        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
}

export default Login;
