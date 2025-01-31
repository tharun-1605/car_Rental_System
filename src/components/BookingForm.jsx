import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Phone, CreditCard, MapPin, Mail, FileText, DollarSign, Car, Calendar, Clock } from 'lucide-react';

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state;

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    licenseNumber: '',
    location: '',
    email: '',
    aadhaarNumber: '',
    amount: car.price,
    carname: car.title
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-car-9baw.onrender.com/api/bookings', formData);
      alert(`Booking confirmed for ${car.title}. Amount to be paid: $${formData.amount}`);
      navigate('/payment', { state: { car, amount: formData.amount } });
    } catch (error) {
      alert('Error confirming booking. Please try again.');
      console.error('Booking error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Car Summary Card */}
        <div className="glass-effect p-6 rounded-2xl mb-8">
          <div className="flex items-center space-x-4">
            <Car className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{car.title}</h2>
              <p className="text-gray-600">Complete your booking details below</p>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="glass-effect p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field pl-10"
                        placeholder="Enter your full name"
                      />
                      <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="input-field pl-10"
                        placeholder="Enter your phone number"
                      />
                      <Phone className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field pl-10"
                        placeholder="Enter your email"
                      />
                      <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-600" />
                  Document Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">License Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        required
                        className="input-field pl-10"
                        placeholder="Enter your license number"
                      />
                      <CreditCard className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Aadhaar Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="aadhaarNumber"
                        value={formData.aadhaarNumber}
                        onChange={handleChange}
                        required
                        className="input-field pl-10"
                        placeholder="Enter your Aadhaar number"
                      />
                      <FileText className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="input-field pl-10"
                        placeholder="Enter pickup location"
                      />
                      <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="glass-effect p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
              Payment Summary
            </h3>
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Daily Rate</p>
                  <p className="text-2xl font-bold text-blue-600">${formData.amount}</p>
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <span>Confirm Booking</span>
                  <Calendar className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Additional Information */}
        <div className="mt-8 glass-effect p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100">
          <div className="flex items-center space-x-3 text-green-800">
            <Clock className="h-5 w-5 text-green-600" />
            <p className="text-sm">
              Your booking will be confirmed instantly. Cancel for free up to 24 hours before pickup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
