import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const LoginUpdatedWithYellowBackground = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-car-9baw.onrender.com/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userId = response.data.id;
        localStorage.setItem('token', response.data.token); // Store token in local storage
        localStorage.setItem('email', email); // Store email in local storage
        navigate('/home', {
          state: {
            user: {
              id: userId,
              email: email, // Ensure email is passed correctly
            }
          }
        });
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full max-w-4xl bg-green-200 rounded shadow-2xl">
        <div className="w-1/2 p-6">
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl mb-4">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
            <div className="mb-4">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2 text-gray-700">Remember Me</label>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Login
            </button>
            <p className="mt-4">
              Don't have an account?{' '}
              <button 
                onClick={() => navigate('/signup')} 
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-yellow-300 to-yellow-200 flex items-center justify-center p-10 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to Car Rental</h1>
          <p className="mt-4 text-lg text-gray-600">Your journey starts here!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginUpdatedWithYellowBackground;