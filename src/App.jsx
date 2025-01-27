import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login'; 
import Home from './components/Home'; 
import BookingForm from './components/BookingForm'; 
import CustomerCareForm from './components/CustomerCareForm';
import ListCarForm from './components/ListCarForm';
import Profile from './components/Profile';
import HowItWorks from './components/HowItWorks'; // Importing the new component
import PaymentPage from './components/PaymentPage';

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
    <div className="min-h-screen bg-gray-50">
      <Router>       
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home cars={cars} location={location} onRentNow={onRentNow} />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<BookingForm />} /> 
          <Route path="/customer-care" element={<CustomerCareForm />} /> 
          <Route path="/listyourcars" element={<ListCarForm onAddCar={onAddCar} />} />
          <Route path="/how-it-works" element={<HowItWorks />} /> {/* New route for How It Works */}
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
