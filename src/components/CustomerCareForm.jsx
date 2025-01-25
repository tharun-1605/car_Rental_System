import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerCareForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    description: '',
    carName: '',
    location: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to the backend
    console.log('Complaint submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/home'); // Redirect to home page after 2 seconds
    }, 2000);
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4">Customer Care</h2>
      <div className="mb-4">
        <label className="block text-gray-700">User Name</label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
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
  );
};

export default CustomerCareForm;
