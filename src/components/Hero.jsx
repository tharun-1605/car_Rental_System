import React from "react";
import { Search, Calendar, MapPin } from "lucide-react";

const Hero = ({ onSearch }) => {
  const [location, setLocation] = React.useState("");
  const [pickUpDate, setPickUpDate] = React.useState("");
  const [returnDate, setReturnDate] = React.useState("");

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
            WE RENT THE HIGHEST CALIBER AUTOMOBILES
          </h1>
          <p className="text-xl text-white text-center mb-8">
            Feel the best experience with our rental deals
          </p>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">
                <MapPin className="h-5 w-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Where to Pick Up"
                  className="w-full focus:outline-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-white">
                <Calendar className="h-5 w-5 text-blue-600" />
                <input
                  type="date"
                  className="w-full focus:outline-none"
                  value={pickUpDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                />
              </div>
              {/* <div className="flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-4">
                                <Calendar className="h-5 w-5 text-blue-600" />
                                <input
                                    type="date"
                                    className="w-full focus:outline-none"
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                />
                            </div> */}
              <button
                onClick={() => {
                  onSearch(location, pickUpDate, returnDate);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ... px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Search className="h-5 w-5" />
                <span>Rent Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
