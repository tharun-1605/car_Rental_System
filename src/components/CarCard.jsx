import React, { useState } from 'react';
import { MapPin, Star, Users } from 'lucide-react';
import BookingForm from './BookingForm';

const CarCard = ({ image, title, price, location, rating, seats }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRentNow = () => {
    setShowBookingForm(true);
  };

  const handleConfirm = (message) => {
    setConfirmationMessage(message);
    setShowBookingForm(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
      {showBookingForm && (
        <BookingForm car={{ title, price }} onConfirm={handleConfirm} />
      )}
      {confirmationMessage && (
        <div className="mt-4 text-green-600">{confirmationMessage}</div>
      )}
    </div>
  );
};

export default CarCard;
