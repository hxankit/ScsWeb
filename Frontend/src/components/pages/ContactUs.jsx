import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData,
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      if (res.status === 200) {
        alert("Message sent ");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 space-y-10">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Address</h2>
                <p className="text-gray-600">
                  SCS Technologies Pvt. Ltd. <br />
                  Ghaziabad, Uttar Pradesh - 201301
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
                <p className="text-gray-600">+91 7599828342</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Email</h2>
                <p className="text-gray-600">info@scstechnologies.in</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">Working Hours</h2>
                <p className="text-gray-600">Mon - Sat: 9 AM to 6 PM</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800"
                  placeholder="+91 9876543210"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
