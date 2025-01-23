import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarCard from './components/CarCard';
import ListCarForm from './components/ListCarForm';

const SAMPLE_CARS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80',
    title: 'Tesla Model 3',
    price: 150,
    location: 'San Francisco, CA',
    rating: 4.9,
    seats: 5,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    title: 'Porsche 911',
    price: 300,
    location: 'Los Angeles, CA',
    rating: 4.8,
    seats: 2,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80',
    title: 'BMW M4',
    price: 200,
    location: 'New York, NY',
    rating: 4.7,
    seats: 4,
  },
];

function App() {
  const [cars, setCars] = useState(SAMPLE_CARS); // State to hold the list of cars
  const [showListForm, setShowListForm] = useState(false);

  const addCar = (newCar) => {
    const carWithId = { ...newCar, id: cars.length + 1 }; // Assign a new ID
    setCars((prevCars) => [...prevCars, carWithId]); // Update the state with the new car
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Cars</h2>
          <button
            onClick={() => setShowListForm(!showListForm)}
            className="text-blue-600 hover:text-blue-700"
          >
            {showListForm ? 'View Cars' : 'List Your Car'}
          </button>
        </div>

        {showListForm ? ( 
          <ListCarForm onAddCar={addCar} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => ( // Use the cars state instead of SAMPLE_CARS
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
