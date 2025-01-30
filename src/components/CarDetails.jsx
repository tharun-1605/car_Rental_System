import React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if location.state is defined
  if (!location.state) {
    return <Navigate to="/home" />; // Redirect to home if no state is found
  }

  const { title, price, location: carLocation, rating, seats, mileage, image } = location.state;

  const handleRentNow = () => {
    navigate('/booking', { state: { title, price } }); // Navigate to booking form
  };

  return (
    <div className="car-details p-4">
      <div className="cancellation-notice mt-4 p-2 border border-green-500 bg-green-100 text-green-700 mb-20">
        <span>✔️ Free Cancellation up to 48 hours before pick-up</span>
      </div>
      <div className="flex">
        <img src={image} alt={title} className="w-1/2 h-auto object-cover" />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-lg">Seats: {seats}</p>
          <p className="text-lg">Doors: 4</p>
          <p className="text-lg">Mileage:12 {mileage}</p>
          <p className="text-lg">Location: {carLocation}</p>
          <p className="text-lg">Rating: {rating}</p>
          <p className="text-2xl font-bold text-red-600">Price: $ {price}</p>
          <button 
            onClick={handleRentNow} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
            Rent Now
          </button>
        </div>
      </div>
      
      <div className="rental-conditions mt-4">
        <h2 className="font-bold">Your car rental includes:</h2>
        <ul>
          <li>Collision Damage Waiver</li>
          <li>Theft Protection</li>
          <li>Roadside Assistance</li>
        </ul>
      </div>
      <div className="coverage-section mt-4 p-4 border border-blue-500 bg-blue-100">
        <h2 className="font-bold">Full Coverage <span className="text-yellow-500">64% customer's choice</span></h2>
        <p>At the counter, the car rental company will block a deposit amount on your credit card. You could lose a deposit amount, if the car is damaged or stolen, but as long as you have our Full Coverage, we will refund you!</p>
        <ul>
          <li>Excess reimbursement</li>
          <li>Damages to the rental car</li>
          <li>Car theft</li>
          <li>Lost or stolen car keys</li>
          <li>Windows, mirrors, wheels</li>
        </ul>
      </div>
      <div className="ml-4 w-1/3 bg-green-100 p-4 rounded-lg mt-20">
        <h2 className="font-bold text-lg">Book a car by phone</h2>
        <p>Have a question? Call us!</p>
        <p className="text-2xl font-bold">+44 (20) 808 952 62</p>
        <p>Ref. Number: 05-547034</p>
        <p className="font-bold">Call center working hours</p>
        <p>Mon – Fri: 24h</p>
        <p>Sat – Sun: 6:00 AM – 10:00 PM UTC</p>
      </div>
    </div>
  );
};

export default CarDetails;