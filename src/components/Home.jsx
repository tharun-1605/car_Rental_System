import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import CarListing from './CarListing';
import { data } from 'react-router-dom';

function Home() {
  const [cars, setCars] = useState([]);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (location, date) => {
    setLocation(location);
    setDate(data);
    const filteredCars = cars.filter(car => 
      car.location.toLowerCase().includes(location.toLowerCase())
    );
    setCars(filteredCars); 
    console.log('Searching for cars in:', location, 'on:', date);
    console.log('Filtered Cars:', filteredCars); // Log the filtered cars
  };

  useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await fetch('https://backend-car-9baw.onrender.com/api/cars');
          if (response.ok) {
            const data = await response.json();
            setCars(data); 
          } else {
            alert('Failed to fetch cars. Please try again.');
          }
        } catch (error) {
          alert('Network error. Please try again later.');
        }
      };
  
      fetchCars();
    }, []);

  return ( 
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Hero onSearch={handleSearch} />
      <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
        <CarListing cars={cars} />
      </div>
    </div>
  );
}

export default Home;
