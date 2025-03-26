import React, { useState, useEffect } from "react";
import "./Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  }, [darkMode]);

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      {/* Profile Information */}
      <div className="settings-card">
        <h3>Profile Information</h3>
        <input type="text" className="settings-input" placeholder="Name" defaultValue="John Doe" />
        <br/>
        <input type="email" className="settings-input" placeholder="Email" defaultValue="john@example.com" />
        <br/>
        <input type="password" className="settings-input" placeholder="Password" />
        <br/>
        <button className="settings-button">Update Profile</button>
      </div>

      {/* Preferences */}
      <div className="settings-card">
        <h3>Preferences</h3>
        <div className="dark-mode-toggle">
          <input
            type="checkbox"
            id="dark-mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label htmlFor="dark-mode">Enable Dark Mode</label>
        </div>
      </div>
    </div>
    
  );
};

export default Settings;
