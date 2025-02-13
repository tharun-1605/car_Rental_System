import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Signup from './components/Signup';
import Login from './components/Login'; 
import Home from './components/Home'; 
import BookingForm from './components/BookingForm'; 
import CustomerCareForm from './components/CustomerCareForm';
import ListCarForm from './components/ListCarForm';
import Profile from './components/Profile';
import HowItWorks from './components/HowItWorks';
import PaymentPage from './components/PaymentPage';
import MainLayout from './components/MainLayout';
import CarDetails from './components/CarDetails';

const App = () => {
  const [cars, setCars] = useState([]); 
  const [location, setLocation] = useState(''); 

  const onAddCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]); 
  };

  const onRentNow = (carId) => {
    console.log(`Renting car with ID: ${carId}`);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home cars={cars} location={location} onRentNow={onRentNow} />} />
              <Route path="/car-details/:id" element={<CarDetails />} />
              <Route path="/booking" element={<BookingForm />} /> 
              <Route path="/customer-care" element={<CustomerCareForm />} /> 
              <Route path="/listyourcars" element={<ListCarForm onAddCar={onAddCar} />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/payment" element={<PaymentPage/>}/>
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
