import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import shared CSS file

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email });
      navigate("/"); // Redirect to dashboard
    } else {
      alert("Please fill all fields!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>
        <form onSubmit={handleSignup} className="auth-form">
        <input
            type="text"
            className="auth-input"
            placeholder="Name"   
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="auth-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">Sign Up</button>
        </form>
        <p className="auth-text">
          Already have an account? <a href="/" className="auth-link">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
