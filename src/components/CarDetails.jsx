import React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

const CarDetailsNeat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!location.state) {
    return <Navigate to="/home" />;
  }

  const { title, price, location: carLocation, rating, seats, mileage, image, fuelType, transmission, description } = location.state;

  const handleRentNow = () => {
    navigate('/booking', { state: { title, price } });
  };

  return (
    <div className="car-details p-6 bg-white shadow-lg rounded-lg">
      <div className="cancellation-notice mt-4 p-3 border border-green-500 bg-green-100 text-green-700 mb-6 rounded">
        <span>✔️ Free Cancellation up to 48 hours before pick-up</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={image} alt={title} className="w-full h-auto object-cover rounded-lg shadow-md" />
        <div className="ml-4 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-lg text-gray-600">Seats: {seats}</p>
            <p className="text-lg text-gray-600">Doors: 4</p>
            <p className="text-lg text-gray-600">Mileage: {mileage} km</p>
            <p className="text-lg text-gray-600">Location: {carLocation}</p>
            <p className="text-lg text-gray-600">Rating: {rating}</p>
            <p className="text-lg text-gray-600">Fuel Type: {fuelType}</p>
            <p className="text-lg text-gray-600">Transmission: {transmission}</p>
            <p className="text-lg text-gray-600">Description: {description}</p>
          </div>
          <p className="text-2xl font-bold text-red-600 mt-4">Price: $ {price}</p>
          <button 
            onClick={handleRentNow} 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 transition duration-300 hover:bg-blue-700">
            Rent Now
          </button>
        </div>
      </div>
      
      <div className="rental-conditions mt-6">
        <h2 className="font-bold text-xl">Your car rental includes:</h2>
        <ul className="list-disc list-inside">
          <li>Collision Damage Waiver</li>
          <li>Theft Protection</li>
          <li>Roadside Assistance</li>
        </ul>
      </div>
      <div className="coverage-section mt-6 p-4 border border-blue-500 bg-blue-100 rounded">
        <h2 className="font-bold text-xl">Full Coverage <span className="text-yellow-500">64% customer's choice</span></h2>
        <p>At the counter, the car rental company will block a deposit amount on your credit card. You could lose a deposit amount, if the car is damaged or stolen, but as long as you have our Full Coverage, we will refund you!</p>
        <ul className="list-disc list-inside">
          <li>Excess reimbursement</li>
          <li>Damages to the rental car</li>
          <li>Car theft</li>
          <li>Lost or stolen car keys</li>
          <li>Windows, mirrors, wheels</li>
        </ul>
      </div>
      <div className="ml-4 w-full md:w-1/3 bg-green-100 p-4 rounded-lg mt-6">
        <h2 className="font-bold text-lg">Book a car by phone</h2>
        <p>Have a question? Call us!</p>
        <p className="text-2xl font-bold">+44 (20) 808 952 62</p>
        <p className="font-bold">Ref. Number: 05-547034</p>
        <p className="font-bold">Call center working hours</p>
        <p>Mon – Fri: 24h</p>
        <p>Sat – Sun: 6:00 AM – 10:00 PM UTC</p>
      </div>
    </div>
  );
};

export default CarDetailsNeat;
