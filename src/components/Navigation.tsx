import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-orange-500">
              Apex Metal Crafts
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`hover:text-orange-500 transition-colors duration-200 ${
                  isActive('/') ? 'text-orange-500' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className={`hover:text-orange-500 transition-colors duration-200 ${
                  isActive('/gallery') ? 'text-orange-500' : ''
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-orange-500 transition-colors duration-200 ${
                  isActive('/about') ? 'text-orange-500' : ''
                }`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`hover:text-orange-500 transition-colors duration-200 ${
                  isActive('/services') ? 'text-orange-500' : ''
                }`}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-orange-500 transition-colors duration-200 ${
                  isActive('/contact') ? 'text-orange-500' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block hover:text-orange-500 transition-colors duration-200 py-2 ${
                  isActive('/') ? 'text-orange-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/gallery" 
                className={`block hover:text-orange-500 transition-colors duration-200 py-2 ${
                  isActive('/gallery') ? 'text-orange-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`block hover:text-orange-500 transition-colors duration-200 py-2 ${
                  isActive('/about') ? 'text-orange-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`block hover:text-orange-500 transition-colors duration-200 py-2 ${
                  isActive('/services') ? 'text-orange-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`block hover:text-orange-500 transition-colors duration-200 py-2 ${
                  isActive('/contact') ? 'text-orange-500' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
