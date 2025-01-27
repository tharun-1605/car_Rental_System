import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SignupUp = () => {
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
    console.log({ email, username, password, phone, address });
    if (password !== reenterPassword) {
      alert('Passwords do not match. Please try again.'); 
      return; 
    } else {
      setErrorMessage(''); 
      setIsSubmitted(true); 
    } 
    try {
      const response = await fetch('http://127.0.0.1:4000/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          password, 
          phoneNumber: phone,
          useraddrees: address,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        navigate('/profile', {
          state: {
            user: {
              id: data.id, // Assuming the user ID is returned in the response
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

export default SignupUp;
