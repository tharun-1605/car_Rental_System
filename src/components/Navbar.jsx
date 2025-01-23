import React from 'react';
import { Car, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CarRent</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* <a href="#" className="text-gray-600 hover:text-blue-600">List Your Car</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Find a Car</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">How it Works</a> */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;