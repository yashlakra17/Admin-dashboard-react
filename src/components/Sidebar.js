import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers, FaCog, FaTimes } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ show, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar Overlay for better UX */}
      <div className={`sidebar-overlay ${show ? "show" : ""}`} onClick={toggleSidebar}></div>

      <div className={`sidebar ${show ? "show" : ""}`} aria-hidden={!show}>
        {/* Sidebar Header with Close Button */}
        <div className="sidebar-header">
          <h3 className="sidebar-title">Admin Panel</h3>
          <button className="close-btn" onClick={toggleSidebar} aria-label="Close sidebar">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="sidebar-menu">
          <li><Link to="/" onClick={toggleSidebar}><FaTachometerAlt /> Dashboard</Link></li>
          <li><Link to="/products" onClick={toggleSidebar}><FaBox /> Products</Link></li>
          <li><Link to="/orders" onClick={toggleSidebar}><FaShoppingCart /> Orders</Link></li>
          <li><Link to="/users" onClick={toggleSidebar}><FaUsers /> Users</Link></li>
          <li><Link to="/settings" onClick={toggleSidebar}><FaCog /> Settings</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
