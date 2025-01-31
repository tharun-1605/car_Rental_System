import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, User, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="glass-effect top-0 z-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 group">
            <Car className="h-8 w-8 text-blue-600 transform transition-transform group-hover:rotate-12" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CarRent
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/home" className="nav-link group">
              <span className="relative">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link to="/listyourcars" className="nav-link group">
              <span className="relative">
                List Your Car
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link to="/customer-care" className="nav-link group">
              <span className="relative">
                Customer Care
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link to="/how-it-works" className="nav-link group">
              <span className="relative">
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </span>
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="btn-primary flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={logout}
                  className="nav-link flex items-center space-x-2 text-red-600 hover:text-red-700"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/" className="btn-primary flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Link>
            )}

          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <Link to="/home" className="nav-link text-center">Home</Link>
              <Link to="/listyourcars" className="nav-link text-center">List Your Car</Link>
              <Link to="/customer-care" className="nav-link text-center">Customer Care</Link>
              <Link to="/how-it-works" className="nav-link text-center">How it Works</Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="btn-primary text-center mt-4">Profile</Link>
                  <button 
                    onClick={logout}
                    className="nav-link text-center mt-2 text-red-600 hover:text-red-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/" className="btn-primary text-center mt-4">Login</Link>
              )}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
