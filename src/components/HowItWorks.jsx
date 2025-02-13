import React from 'react';

const HowItWorks = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Choose Location</h3>
            <p className="mt-2">Select your preferred pick-up location.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Pick-Up Date</h3>
            <p className="mt-2">Choose your pick-up and return dates.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Book Your Car</h3>
            <p className="mt-2">Select your car and complete the booking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
