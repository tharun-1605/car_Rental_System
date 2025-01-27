import React from 'react';
import CarCard from './CarCard';

const CarListing = ({ cars }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            title={car.make}
            price={car.price}
            location={car.location}
            rating={car.rating}
            seats={car.Seats}
            image={car.image} // Assuming you have an image field in your car model
          />
        ))}
      </div>
    </div>
  );
};

export default CarListing;
