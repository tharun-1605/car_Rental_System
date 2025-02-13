import React from 'react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { 
  Car, MapPin, Star, Users, Gauge, Fuel, Settings, Shield, 
  Phone, Clock, CheckCircle, Info, Heart
} from 'lucide-react';

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!location.state) {
    return <Navigate to="/home" />;
  }

  const { title, price, location: carLocation, rating, seats, mileage, image, fuelType, transmission, description } = location.state;

  const handleRentNow = () => {
    navigate('/booking', { state: { title, price } });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 animate-fadeIn">
      {/* Cancellation Notice */}
      <div className="glass-effect mb-8 p-4 border-l-4 border-green-500 rounded-r-xl">
        <div className="flex items-center text-green-800 font-medium">
          <Info className="h-5 w-5 mr-2 text-green-500 animate-pulse" />
          <span>Free Cancellation up to 48 hours before pick-up</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="group relative">
          <div className="card-hover rounded-2xl overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-4">
                <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                  <Heart className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <Car className="h-8 w-8 mb-2" />
                <span className="font-semibold">View Gallery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div className="glass-effect p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{title}</h1>
              <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-yellow-700 font-medium">{rating}/5</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Users, text: `${seats} Seats`, color: 'blue' },
                { icon: Gauge, text: `${mileage} km`, color: 'indigo' },
                { icon: MapPin, text: carLocation, color: 'red' },
                { icon: Fuel, text: fuelType || 'Petrol', color: 'green' },
                { icon: Settings, text: transmission || 'Manual', color: 'purple' },
                { icon: Shield, text: 'Insurance', color: 'teal' }
              ].map((Item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50/80 hover:bg-gray-100/80 transition-colors duration-200">
                  <Item.icon className={`h-5 w-5 text-${Item.color}-500`} />
                  <span className="text-gray-700 font-medium">{Item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-6 bg-gray-50/80 p-4 rounded-xl leading-relaxed">{description}</p>

            <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Daily Rate</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-4xl font-bold text-blue-600">${price}</p>
                    <p className="text-sm text-blue-500">All inclusive</p>
                  </div>
                </div>
                <button 
                  onClick={handleRentNow}
                  className="btn-primary"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Included Features */}
        <div className="glass-effect p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <Shield className="h-6 w-6 text-green-500 mr-2" />
            Your car rental includes:
          </h2>
          <ul className="space-y-3">
            {['Collision Damage Waiver', 'Theft Protection', 'Roadside Assistance'].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coverage Section */}
        <div className="glass-effect p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Full Coverage</h2>
            <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              64% customer's choice
            </span>
          </div>
          <p className="text-gray-700 mb-4 bg-white/50 p-4 rounded-xl">
            Secure your rental with our comprehensive coverage. Includes protection against damages, theft, and more!
          </p>
          <ul className="space-y-2">
            {[
              'Excess reimbursement',
              'Damages to the rental car',
              'Car theft',
              'Lost or stolen car keys',
              'Windows, mirrors, wheels'
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/50 transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 glass-effect p-6 rounded-2xl bg-gradient-to-br from-green-50 via-green-100 to-green-50 max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Phone className="h-6 w-6 text-green-500 mr-2" />
          Book a car by phone
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">Have a question? Call us!</p>
          <p className="text-3xl font-bold text-green-700 flex items-center">
            <span className="animate-pulse">+44 (20) 808 952 62</span>
          </p>
          <div className="border-t border-green-200 pt-4 mt-4">
            <p className="font-semibold text-gray-700">Ref. Number: 05-547034</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-700 flex items-center">
                <Clock className="h-5 w-5 text-green-500 mr-2" />
                Call center working hours
              </p>
              <div className="bg-white/50 p-3 rounded-xl mt-2">
                <p className="text-gray-600">Mon – Fri: 24h</p>
                <p className="text-gray-600">Sat – Sun: 6:00 AM – 10:00 PM UTC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
