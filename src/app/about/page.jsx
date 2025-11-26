import React from 'react';

import { GlobeAmericasIcon, CheckBadgeIcon, UsersIcon } from '@heroicons/react/24/outline';



const stats = [
  { id: 1, name: 'Successful Events Hosted', value: '450+' },
  { id: 2, name: 'Industry-Leading Speakers', value: '1,200' },
  { id: 3, name: 'Global Attendee Network', value: '150K+' },
];

const teamMembers = [
    {
        name: 'Jane Doe',
        role: 'Chief Executive Officer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Mike Johnson',
        role: 'Head of Operations',
        image: 'https://images.unsplash.com/photo-1507003211169-0a812d4f6862?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Sarah Chen',
        role: 'Event Director',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];



export default function AboutPage() {
  return (
    <main className="bg-white mx-auto max-w-7xl ">
      
      
      <div className="relative isolate overflow-hidden pt-14 pb-20 sm:pt-24 sm:pb-32 bg-gray-900">
        
       
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff4d99] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 67.9%, 45.3% 78.4%, 38.9% 91.5%, 38.4% 5.9%, 60.2% 2.5%, 26.5% 0.1%, 22.3% 72.8%, 70.5% 84.8%, 68.9% 97.1%, 74.1% 44.1%)', }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white">
            <div className="max-w-3xl lg:mx-0">
                <p className="text-base font-semibold leading-7 text-pink-500 uppercase tracking-widest">About EVENTLAB</p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl">
                    Connecting Minds, Driving Futures
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-300">
                    We are more than just an event platform. EVENTLAB is the dedicated hub for professionals seeking high-impact conferences, exclusive meetups, and deep-dive industry events that shape tomorrow's business landscape.
                </p>
            </div>
            
            
            <div className="mt-10">
                <img
                    src="https://images.unsplash.com/photo-1540555700478-4be29871e986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Event crowd"
                    className="w-full h-80 object-cover rounded-xl shadow-2xl ring-1 ring-white/10"
                />
            </div>
        </div>
      </div>

     
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col max-w-xs mx-auto">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-5xl font-extrabold tracking-tight text-pink-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

     
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-pink-600 uppercase tracking-wider">
                    Our Core Philosophy
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Committed to Quality, Integrity, and Connection
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                                <CheckBadgeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            Curated Content
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                            Every event and speaker is vetted by our team to ensure the highest possible standard of insights and professionalism.
                        </dd>
                    </div>
                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                                <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            Community Focus
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                            We design platforms specifically to maximize networking and interaction, building a strong, lasting global community.
                        </dd>
                    </div>
                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                                <GlobeAmericasIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            Global Reach
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">
                            Our events span continents, bringing together diverse perspectives from all corners of the industry.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
      </div>

     
      <div className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
                Meet the Team
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((person) => (
                    <div key={person.name} className="text-center">
                        <img 
                            className="mx-auto h-48 w-48 rounded-full object-cover ring-4 ring-red-100/50 hover:ring-pink-500 transition duration-300" 
                            src={person.image} 
                            alt={person.name} 
                        />
                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                            <p className="text-base text-pink-600">{person.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
    </main>
  );
}