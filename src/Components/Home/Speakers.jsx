import React from 'react';


const speakers = [
  {
    name: 'Jacob Logan',
    title: 'Business Manager',
    imageUrl: 'https://i.ibb.co.com/WWs6LR8z/s.jpg', 
  },
  {
    name: 'Santiago Axel',
    title: 'Senior Visual Designer',
    imageUrl: 'https://i.ibb.co.com/WWs6LR8z/s.jpg', 
  },
  {
    name: 'Scarlett Eleanor',
    title: 'Marketing',
    imageUrl: 'https://i.ibb.co.com/WWs6LR8z/s.jpg', 
  },
  
];


const SpeakerCard = ({ speaker }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:shadow-xl">
    
  
    <div className="w-full aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={speaker.imageUrl}
        alt={speaker.name}
      />
    </div>
    
  
    <div className="bg-pink-600 text-white p-4 text-center">
      <h3 className="text-xl font-bold">{speaker.name}</h3>
      <p className="text-sm opacity-90">{speaker.title}</p>
    </div>
  </div>
);


export default function Speakers() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-2xl font-bold text-pink-700/80 uppercase tracking-widest">
            Speaker
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            TALENTED SPEAKER
          </h2>
        </div>
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}


