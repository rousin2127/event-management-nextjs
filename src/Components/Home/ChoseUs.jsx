import React from 'react';
// You might need an icon library like 'react-icons' or '@heroicons/react'
// For this example, let's use Heroicons (npm install @heroicons/react)
import { CalendarDaysIcon, HandRaisedIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

// --- Data for the Features ---
const features = [
  {
    name: 'Curated Events Only',
    description: 'We hand-select every event to ensure quality, value, and relevance to your professional growth. No filler, just impact.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Exclusive Speaker Network',
    description: 'Gain access to top-tier industry leaders, innovators, and thinkers who don\'t speak anywhere else.',
    icon: UserGroupIcon,
  },
  {
    name: 'Guaranteed Networking Success',
    description: 'Our platform provides advanced tools and dedicated sessions designed to facilitate meaningful connections.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Secure & Simple Booking',
    description: 'Enjoy a smooth, secure, and hassle-free ticket purchase and management experience from start to finish.',
    icon: ShieldCheckIcon,
  },
];

// --- Feature Card Component ---
const FeatureCard = ({ feature }) => (
    <div className="flex flex-col gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-700/80  text-white">
            <feature.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
        <p className="text-gray-600">
            {feature.description}
        </p>
    </div>
);

// --- Main ChoseUs Component ---
export default function ChoseUs() {
  return (
    <section className="bg-gray-50 max-w-7xl mx-auto py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* LEFT SIDE: Heading and Call to Action */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-base font-semibold leading-7  uppercase tracking-wider">
              Why EVENTLAB?
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-pink-700/80 sm:text-4xl">
              Experience Events That Drive Real Growth.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We focus on quality over quantity, delivering not just a platform, but a curated experience designed to connect you with the right people and the right knowledge.
            </p>
            <div className="mt-8">
              <a 
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm   transition duration-150 hover:bg-pink-700/80"
              >
                Explore All Events
              </a>
            </div>
          </div>
          
          {/* RIGHT SIDE: Features Grid */}
          <div className="lg:col-span-7">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </dl>
          </div>
        </div>
        
        {/* Optional: Add a subtle visual divider or border */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            Trusted by industry professionals and leading companies globally.
        </div>
      </div>
    </section>
  )
}