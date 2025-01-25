import React from 'react';

const HowItWorks = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">How It Works</h1>
      <p className="mb-2">Welcome to CarRent! Here’s how our service works:</p>
      <ol className="list-decimal list-inside mb-4">
        <li>Browse our selection of cars available for rent.</li>
        <li>Select the car you want and fill out the booking form.</li>
        <li>Confirm your booking and enjoy your ride!</li>
      </ol>
      <p>If you have any questions, feel free to reach out to our Customer Care team.</p>
    </div>
  );
};

export default HowItWorks;
