import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerCareForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    description: '',
    carName: '',
    location: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        console.log('Submitting complaint with data:', formData);
        const response = await axios.post('https://backend-car-9baw.onrender.com/api/customer-care', formData);
        
        const data = response.data;
        console.log('Complaint submitted:', data);
        setSubmitted(true);
        setTimeout(() => {
          navigate('/home');
        }, 2000);
    } catch (error) {
        console.error('Error submitting complaint:', error);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl mb-4">Thank You!</h2>
        <p>Your complaint has been submitted. We will resolve your problem.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mt-20 mx-auto p-7 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Contact Us!</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Our Contact Details</h3>
        <p>Support: example@gmail.com</p>
        <p>Phone: (+1) 123 456 7890</p>
        <p>Address: Chicago, IL 60601</p>
        <p>Working Hours: Mon - Fri: 9am - 7pm, Sunday: Closed</p>
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Car Name</label>
          <input
            type="text"
            name="carName"
            value={formData.carName}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Complaint
        </button>
      </form>

      {/* FAQ Section */}
      <h2 className="text-2xl mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">What documents are required to rent a car?</h3>
          <p>You need a valid driver's license, a credit card, and proof of insurance.</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">How do I book a rental?</h3>
          <p>You can book online through our website or by contacting our customer service.</p>
        </div>
        {/* Add more FAQs as needed */}
      </div>
    </div>
  );
};

export default CustomerCareForm;
