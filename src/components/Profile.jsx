import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileUpdated = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  const [user, setUser] = useState(null);
  const email = location.state?.user?.email || 'Email not found'; // Access email from user object in location state
  console.log('Location object:', location); // Log the entire location object
  console.log('Email passed to Profile:', email); // Log the email to verify it's being passed correctly
  console.log('Token retrieved from localStorage:', token); // Log the token to verify it's being retrieved correctly

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://backend-car-9baw.onrender.com/api/user/${email}`, {
          headers: {
            Authorization: `Bearer ${token}` // Include the token in the request headers
          }
        });
        console.log('API Response:', response.data); // Log the response
        if (response.data) {
          setUser(response.data);
        } else {
          console.error('No user data returned');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {user ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">User Information</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Address:</strong> {user.userAddress}</p> {/* Fixed typo here */}
          <button 
            onClick={handleLogout} 
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      ) : (
        <div>Loading user data...</div>
      )}
    </div>
  );
};

export default ProfileUpdated;