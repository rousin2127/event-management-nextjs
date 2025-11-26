import React from 'react';

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';


const ticketPlans = [
  {
    type: 'Silver',
    price: 100,
    available: 270,
    total: 500,
    color: 'bg-pink-600',
    isPopular: false,
    badgeText: '2', 
    features: [
      { name: 'Conference Ticket', included: true },
      { name: 'Free Certificate', included: false },
      { name: 'Free Lunch & Coffee', included: false },
    ],
  },
  {
    type: 'Gold',
    price: 120,
    available: 300,
    total: 500,
    color: 'bg-gray-800',
    isPopular: true, 
    badgeText: 'Medal',
    discount: '10% off',
    features: [
      { name: 'Conference Ticket', included: true },
      { name: 'Free Certificate', included: true },
      { name: 'Free Lunch & Coffee', included: false },
    ],
  },
  {
    type: 'Silver', 
    price: 150,
    available: 270,
    total: 500,
    color: 'bg-pink-600',
    isPopular: false,
    badgeText: 'Diamond', 
    features: [
      { name: 'Conference Ticket', included: true },
      { name: 'Free Certificate', included: true },
      { name: 'Free Lunch & Coffee', included: true },
    ],
  },
];


const TicketCard = ({ plan }) => {

  const buttonStyle = plan.color.includes('pink') 
    ? "bg-pink-600 text-white hover:bg-red-700" 
    : "bg-gray-800 text-white hover:bg-gray-900";
    
  
  const headerColor = plan.color;

  return (
    <div className={`relative flex flex-col rounded-xl shadow-2xl overflow-hidden ${plan.isPopular ? 'border-4 border-pink-500 scale-[1.03]' : ''}`}>
      
      
      <div className={`${headerColor} text-white p-6 sm:p-8 rounded-t-xl relative overflow-hidden`}>
        
        {plan.discount && (
          <span className="absolute top-3 left-[-30px] bg-pink-700 text-white text-xs font-bold py-1 px-8 transform -rotate-45 shadow-lg">
            {plan.discount}
          </span>
        )}

       
        <div className="absolute top-4 right-4 text-white/50 w-10 h-10 flex items-center justify-center">
            
            <span className="text-4xl">{plan.type === 'Gold' ? '🏆' : '✨'}</span> 
        </div>

        <p className="text-2xl font-bold uppercase">{plan.type}</p>
        <p className="text-4xl font-extrabold mt-2">
          <span className="text-2xl font-bold">BDT</span>
          {plan.price}
        </p>
      </div>

     
      <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col">
        
      
        <div className="text-center mb-6 border-b pb-4">
          <p className="text-gray-500 text-sm">Available Tickets</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">
            <span className="text-pink-600">{plan.available}</span> / {plan.total}
          </p>
        </div>

        
        <ul role="list" className="space-y-4 flex-1">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckIcon className="h-6 w-6 text-pink-600  mt-0.5" aria-hidden="true" />
              ) : (
                <XMarkIcon className="h-6 w-6 text-gray-400  mt-0.5" aria-hidden="true" />
              )}
              <span className={`ml-3 text-base ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        
        <div className="mt-8">
          <button
            className={`w-full py-3 text-lg font-semibold rounded-md transition duration-150 ${buttonStyle}`}
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};


export default function Ticket() {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-2xl font-bold text-pink-500 uppercase tracking-widest">
            Ticket Plan
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            GET SPONSOR TICKET
          </h2>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-10 items-start">
          {ticketPlans.map((plan, index) => (
            <TicketCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
