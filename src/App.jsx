import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'; 
import Home from './components/Home'; 
import BookingForm from './components/BookingForm'; 
import CustomerCareForm from './components/CustomerCareForm';
import ListCarForm from './components/ListCarForm';
import Profile from './components/Profile';

const App = () => {
  const [cars, setCars] = useState([]); 
  const [location, setLocation] = useState(''); 

  const onAddCar = (newCar) => {
    // Allow adding a car with the same title
    setCars((prevCars) => [...prevCars, newCar]); // Add the new car to the list
  };

  const onRentNow = (carId) => {
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
          <Route path="/customer-care" element={<CustomerCareForm />} /> {/* Customer Care form page */}
          <Route path="/listyourcars" element={<ListCarForm onAddCar={onAddCar} />} /> {/* Add Car form page */}
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;