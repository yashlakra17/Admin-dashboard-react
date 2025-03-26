import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Define allowed credentials
  const adminEmail = "lakrayash17@gmail.com";
  const adminPassword = "Joey@0117";

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if credentials match
    if (email === adminEmail && password === adminPassword) {
      setUser({ email }); // Set the user state
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid email or password!"); // Show error message
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input className="login-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
