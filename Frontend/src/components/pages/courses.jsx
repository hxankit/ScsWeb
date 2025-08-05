// src/pages/Courses.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../Navbar";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/courseslist`);
        setCourses(res.data.data || []);
      } catch (err) {
        toast.error("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <p className="p-4">Loading courses...</p>;

  return (
    <>
    <Navbar />
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div
            key={course._id}
            onClick={() => Navigate(`/courses/${course._id}`)}
            className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{course.description?.slice(0, 100)}...</p>
            <p className="text-green-600 font-bold mt-2">₹{course.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Courses;
