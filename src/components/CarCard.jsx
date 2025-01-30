import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const CarCard = ({ image, title, price, location, rating, seats }) => {
  const navigate = useNavigate(); 
  const handleRentNow = () => {
    navigate('/booking', { state: { title, price } }); 
  };

  return (
    <div className="w-full h-auto bg-gray-200 rounded-xl shadow-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 transition delay-7000 transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-white ... ">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" /> {/* Updated to use image prop */}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500">{location}</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{seats} seats</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">${price}</span>
            <span className="text-gray-500 text-sm">/day</span>
          </div>
          <button
            onClick={handleRentNow} 
            className="bg-blue-600 text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
