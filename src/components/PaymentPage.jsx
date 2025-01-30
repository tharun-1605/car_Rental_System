import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, amount } = location.state || {}; // Fallback to an empty object if state is null

  if (!car || !amount) {
    return <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto ">Error: Payment details are not available.</div>;
  }

  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePayment = () => {
    // Logic for processing payment can be added here
    alert(`Payment of $${amount} for ${car.title} has been processed successfully using ${paymentMethod}! During Pick Original Licence Should bw Submited`);
    navigate('/home'); // Navigate to the home page after payment confirmation
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-md mx-auto mt-20 ">
      <h2 className="text-xl font-bold mb-4">Payment Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Car Title</label>
        <input type="text" value={car.title} readOnly className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input type="text" value={`$${amount}`} readOnly className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
        <select 
          value={paymentMethod} 
          onChange={(e) => setPaymentMethod(e.target.value)} 
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="card">Card</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      {paymentMethod === 'card' && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">CVV</label>
            <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
        </div>
      )}

      {paymentMethod === 'upi' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">UPI ID</label>
          <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
        </div>
      )}

      <button onClick={handlePayment} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-indigo">
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;
