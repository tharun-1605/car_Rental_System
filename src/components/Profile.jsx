import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ProfileUpdated = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const username = location.state?.username; // Assuming userId is passed in location state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        console.log('Token:', token); // Log the token to check if it's present
        const response = await axios.get(`http://localhost:5000/api/user/${username}`, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the request headers
            }
        });
        console.log('User data fetched:', response.data); // Log the fetched user data
        if (response.data) {
            setUser(response.data);
        } else {
            console.error('No user data returned');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {user ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold">User Information</h2>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Address:</strong> {user.useraddrees}</p>
        </div>
      ) : (
        <div>Loading user data...</div>
      )}
    </div>
  );
};

export default ProfileUpdated;
