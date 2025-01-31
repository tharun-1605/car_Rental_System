import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageSquare, User, Car, HelpCircle, Send, ChevronDown } from 'lucide-react';

const CustomerCareForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    description: '',
    carName: '',
    location: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-car-9baw.onrender.com/api/customer-care', formData);
      setSubmitted(true);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      console.error('Error submitting complaint:', error);
    }
  };

  const faqs = [
    {
      question: "What documents are required to rent a car?",
      answer: "You'll need a valid driver's license, a credit card for the security deposit, and proof of insurance. International renters may need additional documentation."
    },
    {
      question: "How do I book a rental?",
      answer: "You can book through our website by selecting your desired car and dates, or contact our customer service team for assistance with your reservation."
    },
    {
      question: "What's included in the rental price?",
      answer: "Our rental prices typically include basic insurance, maintenance, and 24/7 roadside assistance. Additional services like GPS or child seats are available for an extra fee."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation is available up to 48 hours before your pickup time. Later cancellations may incur a fee."
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="glass-effect p-8 rounded-2xl text-center animate-fadeIn">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600">Your complaint has been submitted successfully. We'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-5xl mx-auto">
        {/* Contact Information Card */}
        <div className="glass-effect p-8 rounded-2xl mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, text: "support@example.com", label: "Email" },
              { icon: Phone, text: "(+1) 123 456 7890", label: "Phone" },
              { icon: MapPin, text: "Chicago, IL 60601", label: "Address" },
              { icon: Clock, text: "Mon - Fri: 9am - 7pm", label: "Hours" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white/50 rounded-xl text-center hover:bg-white/80 transition-colors">
                <item.icon className="h-6 w-6 text-blue-600 mb-2" />
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-900">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Complaint Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
              Submit Your Complaint
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="input-field pl-10"
                    required
                  />
                  <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field pl-10"
                    required
                  />
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Car Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="carName"
                    value={formData.carName}
                    onChange={handleChange}
                    className="input-field pl-10"
                    required
                  />
                  <Car className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input-field pl-10"
                    required
                  />
                  <MapPin className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="input-field h-32 resize-none"
                  required
                  placeholder="Please describe your issue..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Submit Complaint</span>
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <HelpCircle className="h-5 w-5 mr-2 text-blue-600" />
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/50 rounded-xl overflow-hidden hover:bg-white/80 transition-colors"
                >
                  <button
                    className="w-full px-4 py-3 text-left flex items-center justify-between"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        expandedFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 pb-3 text-gray-600 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCareForm;
