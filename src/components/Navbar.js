import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" id="admin">yash lakra Dashboard</Link>
      
      {/* Toggle button for mobile */}
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navbar menu */}
      <div className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/orders" onClick={() => setMenuOpen(false)}>Orders</Link>
        <Link to="/users" onClick={() => setMenuOpen(false)}>Users</Link>
        <Link to="/settings" onClick={() => setMenuOpen(false)}>Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;
