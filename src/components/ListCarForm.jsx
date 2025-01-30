import React, { useState } from 'react';
import { Car, DollarSign, MapPin } from 'lucide-react';
import axios from 'axios';

const ListCarForm = ({ onAddCar }) => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    rating: '',
    year: '',
    Seats: '',
    location: '',
    price: '',
    mileage: '', // New state for mileage
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCarDetails((prevDetails) => ({
        ...prevDetails,
        image: reader.result // Store base64 string
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!carDetails.make || !carDetails.rating || !carDetails.year || !carDetails.Seats || !carDetails.location || !carDetails.price || !carDetails.mileage || !carDetails.image) {
        alert('Please fill out all fields before submitting.');
        return;
    } 
    
    try {
      const response = await axios.post('http://127.0.0.1:4000/api/cars', carDetails);
      alert('Car listed successfully!');
      setCarDetails({ make: '', rating: '', year: '', Seats: '', location: '', price: '', mileage: '', image: '' }); // Reset form
    } catch (error) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg mt-15 shadow-2xl max-w-2xl mx-auto ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">List Your Car</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 mb-2">Car Details</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="make"
              value={carDetails.make}
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
              name="Seats"
              value={carDetails.Seats}
              onChange={handleChange}
              placeholder="Seats"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <input
              type="text"
              name="mileage"
              value={carDetails.mileage}
              onChange={handleChange}
              placeholder="Mileage"
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
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
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