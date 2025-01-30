import React from 'react';
import { Link } from 'react-router-dom';
import { Car, User, Menu } from 'lucide-react';

const Navbar = (props) => {
  const handleHowItWorksClick = () => {
    alert('This is how it works: [insert details here]');
  };

  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-black" />
            <span className="text-xl font-bold text-blue-500">CarRent</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="text-gray-50 hover:text-blue-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">Home</Link>
            <Link to="/listyourcars" className="text-gray-600 hover:text-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">List Your Car</Link>
            <Link to="/customer-care" className="text-gray-600 hover:text-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">Customer Care</Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">How it Works</Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">Profile</Link>
            {/* <button className="flex items-center space-x-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white" onClick={() => alert('Profile clicked!')}>
              <img src="src/assets/222222221qqqq1111.jpg" alt="Profile" className="h-8 w-8 rounded-full " />
            </button> */}
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
