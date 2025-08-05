import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses/course/${id}`);
        setCourse(res.data.data);
      } catch (err) {
        toast.error("Failed to load course details");
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    setEnrolling(true);
    try {
      // await axios.post('/api/enroll', { courseId: id })
      toast.success("We will be here soon");
    } catch (error) {
      toast.error("Enrollment failed.");
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 max-w-5xl mx-auto animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-2/3 mb-4" />
        <div className="h-72 bg-gray-300 rounded mb-6" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
          <div className="h-4 bg-gray-300 rounded w-3/4" />
        </div>
      </div>
    );
  }

  if (!course) return <p className="p-4">No course found</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:text-blue-800 font-medium underline"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-blue-800">{course.title}</h1>

      {/* Thumbnail */}
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full max-w-4xl h-72 object-cover rounded-lg mb-6 shadow-md"
      />

      {/* Description */}
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">{course.description}</p>

      {/* Info grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-md mb-6">
        <p><span className="font-semibold">Category:</span> {course.category}</p>
        <p><span className="font-semibold">Duration:</span> {course.duration}</p>
        <p><span className="font-semibold">Level:</span> {course.level}</p>
        <p><span className="font-semibold">Price:</span> ₹{course.price}</p>
      </div>

      {/* Syllabus */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-blue-700">Syllabus</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {course.syllabus?.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.content}
            </li>
          ))}
        </ul>
      </div>

      {/* Enroll Button */}
      <button
        onClick={handleEnroll}
        disabled={enrolling}
        className={`bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300 ${
          enrolling ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {enrolling ? "Enrolling..." : "Enroll Now"}
      </button>
    </div>
  );
};

export default CourseDetails;
