import React, { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const Navigate=useNavigate()
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/courseslist`, {
          withCredentials: true,
        });
        setCourses(res.data?.data || []);
        console.log(courses.thumbnail)
      } catch (err) {
        setError("Failed to fetch courses");
        toast.error("Error loading courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEdit = (id) => {
    toast("Edit feature coming soon!");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/courses/deletecourse/${id}`, {
        withCredentials: true,
      });
      toast.success("Course deleted successfully!");
      setCourses(prev => prev.filter(course => course._id !== id));
    } catch (err) {
      toast.error("Failed to delete course");
    }
  };

  const toggleMenu = (id) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  if (loading) return <p className="p-4">Loading courses...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="relative bg-white p-5 rounded-xl shadow-md">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
                <p className="text-sm text-green-600 font-semibold mt-1">₹{course.price}</p>
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleMenu(course._id)}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <MoreVertical size={20} />
                </button>

                {openMenuId === course._id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border shadow-md rounded-md z-10">
                    <button
                      onClick={() => handleEdit(course._id)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ➕ Add Course Button */}
        <div
          onClick={() => Navigate("addcourse")}
          className="flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-200 cursor-pointer p-5 rounded-xl shadow-md"
        >
          <div className="text-4xl font-bold text-gray-500">+</div>
          <p className="text-gray-600 mt-2">Add Course</p>
        </div>
      </div>
    </div>
  );
};

export default CourseManager;
