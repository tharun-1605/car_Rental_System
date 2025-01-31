import React, { useState } from 'react';
import { Car, DollarSign, MapPin, Upload, Camera, Calendar, Users, Gauge, Info, Shield, CheckCircle } from 'lucide-react';
import axios from 'axios';

const ListCarForm = ({ onAddCar }) => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    rating: '',
    year: '',
    Seats: '',
    location: '',
    price: '',
    mileage: '',
    image: ''
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setCarDetails((prevDetails) => ({
          ...prevDetails,
          image: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!carDetails.make || !carDetails.rating || !carDetails.year || !carDetails.Seats || 
        !carDetails.location || !carDetails.price || !carDetails.mileage || !carDetails.image) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://backend-car-9baw.onrender.com/api/cars', carDetails);
      alert('Car listed successfully!');
      setCarDetails({ make: '', rating: '', year: '', Seats: '', location: '', price: '', mileage: '', image: '' });
      setPreviewImage(null);
      setStep(1);
    } catch (error) {
      alert('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Car className="h-5 w-5 mr-2 text-blue-600" />
        Car Details
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Make & Model</label>
          <input
            type="text"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            placeholder="e.g., Toyota Camry"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
          <input
            type="text"
            name="rating"
            value={carDetails.rating}
            onChange={handleChange}
            placeholder="e.g., 4.5"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <div className="relative">
            <Calendar className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="number"
              name="year"
              value={carDetails.year}
              onChange={handleChange}
              placeholder="e.g., 2022"
              className="input-field pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Seats</label>
          <div className="relative">
            <Users className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="number"
              name="Seats"
              value={carDetails.Seats}
              onChange={handleChange}
              placeholder="e.g., 5"
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      <button 
        onClick={() => setStep(2)}
        className="btn-primary w-full"
      >
        Continue
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Info className="h-5 w-5 mr-2 text-blue-600" />
        Additional Information
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="location"
              value={carDetails.location}
              onChange={handleChange}
              placeholder="Enter pickup location"
              className="input-field pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Daily Rate</label>
          <div className="relative">
            <DollarSign className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="number"
              name="price"
              value={carDetails.price}
              onChange={handleChange}
              placeholder="Enter daily rate"
              className="input-field pl-10"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mileage</label>
          <div className="relative">
            <Gauge className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              name="mileage"
              value={carDetails.mileage}
              onChange={handleChange}
              placeholder="Enter mileage"
              className="input-field pl-10"
            />
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={() => setStep(1)}
          className="btn-secondary flex-1"
        >
          Back
        </button>
        <button 
          onClick={() => setStep(3)}
          className="btn-primary flex-1"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        <Camera className="h-5 w-5 mr-2 text-blue-600" />
        Car Photos
      </h3>

      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
          <div className="text-center">
            {previewImage ? (
              <div className="relative">
                <img 
                  src={previewImage} 
                  alt="Car preview" 
                  className="mx-auto max-h-64 rounded-lg object-cover"
                />
                <button 
                  onClick={() => {
                    setPreviewImage(null);
                    setCarDetails(prev => ({ ...prev, image: '' }));
                  }}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ) : (
              <label className="cursor-pointer block">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <span className="text-gray-600">Click to upload car photos</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        </div>

        {/* Requirements List */}
        <div className="bg-blue-50 p-4 rounded-xl">
          <h4 className="font-medium text-blue-900 mb-2 flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Photo Requirements
          </h4>
          <ul className="space-y-2">
            {[
              'Clear, well-lit photos of your car',
              'Include interior and exterior shots',
              'Maximum file size: 5MB',
              'Supported formats: JPG, PNG'
            ].map((req, index) => (
              <li key={index} className="flex items-center text-sm text-blue-800">
                <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={() => setStep(2)}
          className="btn-secondary flex-1"
        >
          Back
        </button>
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary flex-1 relative"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Car className="h-5 w-5 mr-2" />
              List Your Car
            </span>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-2xl mx-auto">
        <div className="glass-effect p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">List Your Car</h2>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
              <div className="absolute left-0 right-0 h-0.5 bg-gray-200 -z-10">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>
      </div>
    </div>
  );
};

export default ListCarForm;
