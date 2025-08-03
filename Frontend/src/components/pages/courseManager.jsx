import React, { useState, useEffect } from "react";
import { MoreVertical } from "lucide-react";
import axios from "axios";

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/courseslist`, {
          withCredentials: true,
        });
        setCourses(res.data?.courses || res.data); // Adjust based on your API response
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleEdit = (id) => {
    console.log("Edit course", id);
    // TODO: Show edit modal / form
  };

  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this course?");
      if (!confirm) return;

      await axios.delete(`${import.meta.env.VITE_API_URL}/api/courses/${id}`, {
        withCredentials: true,
      });

      setCourses((prev) => prev.filter((course) => course._id !== id));
      alert("Course deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete course.");
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
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-600">{course.description}</p>
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
      </div>
    </div>
  );
};

export default CourseManager;
