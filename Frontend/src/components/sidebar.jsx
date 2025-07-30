// src/components/Sidebar.jsx
import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); // ✅ proper hook to redirect

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/admin/logout`, {
        withCredentials: true,
      });

      if (res.status === 200) {
        navigate("/admin"); 
      }
    } catch (error) {
      console.error("Logout failed", error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col space-y-4">
          <NavLink
            to="/admin/training"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Training
          </NavLink>

          <NavLink
            to="courses"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }
          >
            Courses
          </NavLink>
        </nav>
      </div>

      {errorMsg && <p className="text-red-500">{errorMsg}</p>}

      <button
        onClick={handleLogout}
        className="mt-4 text-red-600 hover:underline"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
