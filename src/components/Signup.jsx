import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const SignupUpdated = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(''); 
  const [reenterPassword, setReenterPassword] = useState('');
  const [address, setAddress] = useState(''); 
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== reenterPassword) {
      alert('Passwords do not match. Please try again.'); 
      return; 
    } else {
      setErrorMessage(''); 
      setIsSubmitted(true); 
    } 
    try {
        const response = await axios.post('https://backend-car-9baw.onrender.com/api/createuser', {
          email,
          username,
          password, 
          phoneNumber: phone,
          userAddress: address,
        });

      const data = response.data;
      if (response.status === 201) {
        setIsSubmitted(true);
        navigate('/home', {
          state: {
            user: {
              id: data.id,
              name: username,
              email: email,
              phone: phone, 
              address: address 
            }
          }
        });
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-green-200 rounded shadow-2xl">
        <div className="w-1/2 p-6">
          {isSubmitted ? (
            <div className="text-center">Already Email Used!</div>
          ) : (
            <div className="max-w-md mx-auto mt-10">
              <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Re-enter Password</label>
                  <input
                    type="password"
                    value={reenterPassword}
                    onChange={(e) => setReenterPassword(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="w-1/2 bg-gradient-to-r from-yellow-300 to-yellow-200 flex items-center justify-center p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to Car Rental</h1>
          <p className="mt-4 text-lg text-gray-600">Your journey starts here!</p>
        </div>
      </div>
    </div>
  );
};

export default SignupUpdated;
