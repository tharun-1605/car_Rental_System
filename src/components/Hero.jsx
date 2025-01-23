import React from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hero = ({ onSearch }) => {
    const [location, setLocation] = React.useState('');
    const [date, setDate] = React.useState('');
    const navigate = useNavigate(); // Create navigate function

    return (
        <div className="relative h-[500px]">
            <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
                alt="Hero car"
                className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-4xl w-full px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
                        Find Your Perfect Ride
                    </h1>
                    <p className="text-xl text-white text-center mb-8">
                        Rent cars from local owners and explore with confidence
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4">
                                <MapPin className="h-5 w-5 text-blue-600" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full focus:outline-none"
                                    value={location} // Set the value to the location state
                                    onChange={(e) => setLocation(e.target.value)} // Update location state on change
                                />
                            </div>
                            <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4">
                                <Calendar className="h-5 w-5 text-blue-600" />
                                <input
                                    type="date"
                                    className="w-full focus:outline-none"
                                    value={date} // Set the value to the date state
                                    onChange={(e) => setDate(e.target.value)} // Update date state on change
                                />
                            </div>
                            <button 
                                onClick={() => {
                                    onSearch(location, date); // Call onSearch with location and date
                                    navigate('/cars'); // Navigate after search
                                }}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2"
                            >
                                <Search className="h-5 w-5" />
                                <span>Search Cars</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;