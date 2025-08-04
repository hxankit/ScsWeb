import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Courses", path: "/courses" },
    { name: "Training", path: "/training" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop-only Brand Text */}
          <span className="hidden md:inline-block text-xl font-bold tracking-wide">
            <span className="text-gray-900">SCS</span>
            <span className="text-blue-600">Technologies</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition duration-200 ${
                isActive(item.path)
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block font-medium transition duration-200 ${
                isActive(item.path)
                  ? "text-blue-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
