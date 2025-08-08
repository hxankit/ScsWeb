// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/HomePage';
import ContactSection from './components/pages/ContactUs';
import NotFoundPage from './components/pages/NotFound';
import AboutSection from './components/pages/AboutPage';
import ServicesPage from './components/pages/Services';
import ComingSoon from './components/pages/CommingSoon';
import LoginPage from './components/pages/adminLogin';

import AdminDashboard from './components/pages/adminDashboard';
import ProtectedRoute from './components/protectedRoutes';

import CourseManager from './components/pages/adminCourse';
import AddCourse from './components/pages/addcoursepage';
import Courses from './components/pages/courses';
import CourseDetails from './components/pages/courseDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/services" element={<ServicesPage />} />
        {/* <Route path="/courses" element={<Courses />}  /> */}
         {/* <Route path="/courses/:id" element={<CourseDetails />} /> */}
        
        <Route path="/training" element={<ComingSoon />} />
        <Route path="/admin" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Protected Admin Routes with Dashboard Layout */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="courses" element={<CourseManager />} />
          <Route path="courses/addcourse" element={<AddCourse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
