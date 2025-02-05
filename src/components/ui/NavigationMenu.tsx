import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">BrandLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg"
                >
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Web Design
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    SEO
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Marketing
                  </a>
                </motion.div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t shadow-md"
        >
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              About
            </a>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center w-full text-gray-700 hover:text-blue-600"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="mt-2 w-full bg-white border rounded-md shadow-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Web Design
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    SEO
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Marketing
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Blog
            </a>

            {/* CTA Button */}
            <a
              href="#"
              className="block text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavigationMenu;
