"use client";
import React from 'react';
// Using Heroicons for a consistent look
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

// --- Data for Contact Details ---
const contactDetails = [
  {
    name: 'Call Us',
    detail: '+1 (555) 123-4567',
    icon: PhoneIcon,
    href: 'tel:+15551234567',
  },
  {
    name: 'Email Us',
    detail: 'contact@eventlab.com',
    icon: EnvelopeIcon,
    href: 'mailto:contact@eventlab.com',
  },
  {
    name: 'Our Office',
    detail: '123 Event Ave, Suite 400, New York, NY 10001',
    icon: MapPinIcon,
    href: '#map', // Link to the map section
  },
];

// --- Main Contact Component ---
export default function Contact() {
  
  // This function would handle the form submission logic (e.g., using fetch or Axios)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission goes here
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <main className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-lg font-medium text-pink-600 uppercase tracking-widest">
            Get In Touch
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Contact EventLab
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Fill out the form below or use our direct contact details.
          </p>
        </div>

        {/* Main Content Grid: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 bg-white shadow-xl rounded-2xl p-6 sm:p-10">
          
          {/* LEFT: Contact Details */}
          <div className="lg:col-span-1 space-y-8 p-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 border-red-100">
                Direct Contact
            </h2>
            
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1">
                  <item.icon className="h-6 w-6 text-pink-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <a 
                    href={item.href} 
                    className="text-gray-600 hover:text-pink-600 transition duration-150"
                  >
                    {item.detail}
                  </a>
                </div>
              </div>
            ))}
            
            {/* Map Placeholder */}
            <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Find Us Here</h3>
                <div id="map" className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    [Map Placeholder Area]
                </div>
            </div>
          </div>
          
          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-2 p-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-3 border-red-100 mb-6">
                Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 border"
                  />
                </div>
                
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 p-3 border"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 border"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 p-3 border"
                  defaultValue={''}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-700 transition duration-150 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
        </div>
        
      </div>
    </main>
  );
}