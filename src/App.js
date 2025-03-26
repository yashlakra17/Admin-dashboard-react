import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [user, setUser] = useState(null); // State to check if user is logged in
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Show Sidebar only when user is logged in */}
        {user && <Sidebar show={showSidebar} toggleSidebar={() => setShowSidebar(!showSidebar)} />}
        
        <div style={{ flex: 1 }}>
          {/* Show Navbar when user is logged in */}
          {user && <Navbar />}
          
          <Routes>
            {/* If user is not logged in, show login/signup */}
            {!user ? (
              <>
             <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup setUser={setUser} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                {/* If user is logged in, show dashboard */}
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Users />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
