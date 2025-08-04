import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Courses", path: "/courses" },
    { name: "Training", path: "/training" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="bg-white border-b shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
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

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-gray-700 hover:text-blue-600 transition duration-200"
              onClick={() => setIsOpen(false)} // Close on click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
