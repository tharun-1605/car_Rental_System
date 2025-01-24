import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'; // Import the Login component
import Home from './components/Home'; // Import the Home component
import BookingForm from './components/BookingForm'; // Import the BookingForm component

const App = () => {
  const [cars, setCars] = useState([]); // State for cars
  const [location, setLocation] = useState(''); // State for location
  const onRentNow = (carId) => {
    // Function to handle renting a car
    console.log(`Renting car with ID: ${carId}`);
  };

  return ( 
    <div className="min-h-screen bg-gray-50">
      <Router>       
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login page */}
          <Route path="/home" element={<Home cars={cars} location={location} onRentNow={onRentNow} />} /> {/* Home page */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<BookingForm />} /> {/* Booking form page */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
