import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';

const LoginUpdatedWithYellowBackground = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:4000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const userId = response.data.id;
        navigate('/home', {
          state: {
            user: {
              id: userId,
              email: email,
            }
          }
        });
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-300">
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
            <div className="mt-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded mr-2">Google</button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Facebook</button>
            </div>
          </form>
        </div>
        <div className="w-1/2 bg-yellow-200 flex items-center justify-center">
          <img src="src/assets/B8gocfdCYAA87sR.jpg" alt="Car" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoginUpdatedWithYellowBackground;
