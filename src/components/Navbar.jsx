import React from 'react';
import { Link } from 'react-router-dom';
import { Car, User, Menu } from 'lucide-react';

const Navbar = (props) => {
  const handleHowItWorksClick = () => {
    alert('This is how it works: [insert details here]');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">CarRent</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/listyourcars" className="text-gray-600 hover:text-blue-600">List Your Car</Link>
            <button onClick={props.onFindCars} className="text-gray-600 hover:text-blue-600">Find Cars</button>
            <Link to="/customer-care" className="text-gray-600 hover:text-blue-600">Customer Care</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600">How it Works</Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
            <button className="flex items-center space-x-2" onClick={() => alert('Profile clicked!')}>
              <img src="src/assets/222222221qqqq1111.jpg" alt="Profile" className="h-8 w-8 rounded-full" />
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
