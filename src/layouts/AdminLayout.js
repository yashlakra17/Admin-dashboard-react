import React from "react";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/Navbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <AdminNavbar />
        <div className="container mt-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
