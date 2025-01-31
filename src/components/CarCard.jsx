import React from 'react';
import { MapPin, Star, Users, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const CarCard = ({ id, image, title, price, location, rating, seats }) => {
  const navigate = useNavigate(); 
  
  const handleRentNow = () => {
    navigate(`/car-details/${id}`, { 
      state: { title, price, location, rating, seats, image }
    });
  };

  return (
    <div className="card-hover bg-white rounded-2xl shadow-md overflow-hidden animate-fadeIn">
      {/* Image Container */}
      <div className="relative group h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>

        {/* Location */}
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between py-2 border-y border-gray-100">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{seats} seats</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">Available Now</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Price per day</p>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ${price}
              </span>
              <span className="text-sm text-gray-500">/day</span>
            </div>
          </div>
          <button
            onClick={handleRentNow}
            className="btn-primary flex items-center space-x-2"
          >
            <span>Rent Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
