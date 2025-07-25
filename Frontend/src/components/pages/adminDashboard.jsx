// src/pages/AdminDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
