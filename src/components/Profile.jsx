import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Mail, Phone, MapPin, LogOut, Settings, Car, Calendar, Shield, Clock, AlertCircle } from 'lucide-react';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const email = location.state?.user?.email || localStorage.getItem('email');

  useEffect(() => {
    if (token && email) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`https://backend-car-9baw.onrender.com/api/user/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.data) {
            setUser(response.data);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [email, token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="glass-effect p-8 rounded-2xl text-center animate-fadeIn">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Authentication Error</h2>
          <p className="text-gray-600 mb-4">No valid email found. Please check your login credentials.</p>
          <button 
            onClick={() => navigate('/')} 
            className="btn-primary"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="glass-effect p-8 rounded-2xl animate-pulse">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 w-48 bg-blue-200 rounded"></div>
              <div className="h-3 w-32 bg-blue-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="glass-effect p-8 rounded-2xl mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user?.username || 'User'}</h1>
              <p className="text-gray-600">Member since {new Date().getFullYear()}</p>
            </div>
            <button 
              onClick={handleLogout}
              className="ml-auto btn-secondary flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Information */}
          <div className="lg:col-span-2">
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Personal Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-900">{user?.email}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Phone Number</p>
                    <p className="font-medium text-gray-900">{user?.phoneNumber || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium text-gray-900">{user?.userAddress || 'Not provided'}</p>
                  </div>
                </div>
              </div>

              <button className="mt-6 btn-outline w-full flex items-center justify-center space-x-2">
                <Settings className="h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-2xl">
              <div className="space-y-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
