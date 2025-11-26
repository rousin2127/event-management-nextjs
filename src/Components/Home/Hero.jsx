"use client";

import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
    const targetDate = new Date('January 21, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference < 0) {
        
        const absDifference = Math.abs(difference);
        timeLeft = {
            days: Math.floor(absDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((absDifference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((absDifference / 1000 / 60) % 60),
            seconds: Math.floor((absDifference / 1000) % 60),
            isPast: true,
        };
    } else {
        
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
            isPast: false,
        };
    }

    return timeLeft;
};


const CountdownUnit = ({ value, label }) => (
    <div className="bg-black/50 p-2 sm:p-4 text-center mx-1 flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
        <div className="text-3xl sm:text-4xl font-bold">{value}</div>
        <div className="text-sm font-light uppercase mt-1 opacity-80">{label}</div>
    </div>
);

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        
        return () => clearInterval(timer);
    }, []);

  
    const formattedDays = timeLeft.isPast ? `-${timeLeft.days}` : timeLeft.days;

    return (
       
        <div className="lg:w-7xl mx-auto relative overflow-hidden bg-purple-900 text-white min-h-[400px] flex items-center">

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-pink-700/80"></div>

                <div 
                    className="absolute inset-y-0 right-0 w-full sm:w-1/2 bg-cover bg-center" 
                    style={{ 
                        backgroundImage: `url('https://picsum.photos/600/400')`, // 
                        maskImage: 'linear-gradient(to right, transparent 0%, black 100%)'
                    }}
                >
                   
                    <div className="absolute inset-0 bg-gradient-to-lf from-purple-900 via-purple-900/50 to-transparent"></div>
                </div>
            </div>

           
            <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 max-w-7xl">
                
               
                <p className="text-lg font-semibold tracking-wider mb-2 opacity-80">
                    January 21, 2026
                </p>

                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
                    EVENTS, MEETUPS &<br className="hidden sm:inline" /> CONFERENCES
                </h1>
                
                
                <div className="flex justify-start mb-10">
                    <CountdownUnit value={formattedDays} label="Days" />
                    <CountdownUnit value={timeLeft.hours.toString().padStart(2, '0')} label="Hour" />
                    <CountdownUnit value={timeLeft.minutes.toString().padStart(2, '0')} label="Minlute" /> 
                    <CountdownUnit value={timeLeft.seconds.toString().padStart(2, '0')} label="Secoend" /> 
                </div>

              
                <div className="flex space-x-4">
                    <button className="bg-white text-purple-900 hover:bg-gray-200 transition duration-300 font-medium py-3 px-8 text-lg">
                        Book Now
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white/10 transition duration-300 font-medium py-3 px-8 text-lg">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

