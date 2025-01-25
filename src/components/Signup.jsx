import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number
  const [reenterPassword, setReenterPassword] = useState(''); // New state for re-enter password
  const [address, setAddress] = useState(''); // New state for address
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message
  const navigate = useNavigate(); // Create navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, password, phone, address });
    if (password !== reenterPassword) {
      alert('Passwords do not match. Please try again.'); // Set error message
      return; // Prevent navigation
    } else {
      setErrorMessage(''); 
      setIsSubmitted(true); 
    } 
    navigate('/home', {
      state: {
        user: {
          name: username,
          email: email,
          phone: phone, 
          address: address 
        }
      }
    });
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-center">Thank you for signing up!</div>
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
  );
};

export default Signup;