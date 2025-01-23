import React, { useState } from 'react';
import { Car, DollarSign, MapPin, Camera } from 'lucide-react';

const ListCarForm = ({ onAddCar }) => {
  const [carDetails, setCarDetails] = useState({
    title: '',
    rating: '',
    year: '',
    seats: '',
    location: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!carDetails.title || !carDetails.rating || !carDetails.year || !carDetails.seats || !carDetails.location || !carDetails.price) {
        alert('Please fill out all fields before submitting.');
        return; // Prevent submission if validation fails
    } 
    
    onAddCar(carDetails); // Call the function to add the new car
    setCarDetails({ title: '', rating: '', year: '', seats: '', location: '', price: '' }); // Reset form
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">List Your Car</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2">Car Details</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={carDetails.title}
              onChange={handleChange}
              placeholder="Make"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="text"
              name="rating"
              value={carDetails.rating}
              onChange={handleChange}
              placeholder="Model"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="number"
              name="year"
              value={carDetails.year}
              onChange={handleChange}
              placeholder="Year"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="number"
              name="seats"
              value={carDetails.seats}
              onChange={handleChange}
              placeholder="Seats"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Location</label>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="location"
              value={carDetails.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Pricing</label>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-gray-400" />
            <input
              type="number"
              name="price"
              value={carDetails.price}
              onChange={handleChange}
              placeholder="Daily rate"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Photos</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Drag and drop photos here or click to upload</p>
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
          <Car className="h-5 w-5" />
          <span>List Your Car</span>
        </button>
      </form>
    </div>
  );
};

export default ListCarForm;
