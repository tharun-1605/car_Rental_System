import React from 'react';
import CarCard from './CarCard';

const CarListing = ({ cars, location }) => {
    const filteredCars = location
        ? cars.filter(car => car.location.toLowerCase().includes(location.toLowerCase()))
        : cars;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCars.map((car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </div>
  );
};

export default CarListing;
