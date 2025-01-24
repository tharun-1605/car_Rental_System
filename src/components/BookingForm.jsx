import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const BookingForm = () => {
  const location = useLocation(); // Get the location object
  const car = location.state; // Access the car details from the state

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const [licenseNumber, setLicenseNumber] = useState('');
  const [locationInput, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [amount, setAmount] = useState(car.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${car.title}. Amount to be paid: $${amount}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Book {car.title}</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">License Number</label>
        <input type="text" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" value={locationInput} onChange={(e) => setLocation(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Aadhaar Number</label>
        <input type="text" value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} required className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input type="text" value={amount} readOnly className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
