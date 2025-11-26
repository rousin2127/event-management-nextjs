import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const EventLabLogo = () => (
    <div className="flex items-center space-x-2">
        <span className="text-3xl text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
            </svg>
        </span>
        <span className="text-2xl font-extrabold">Event<span className="font-light">Lab</span></span>
    </div>
);


export default function Footer() {
    
    const socialLinks = [
        { icon: FaFacebookF, href: '#' },
        { icon: FaInstagram, href: '#' },
        { icon: FaLinkedinIn, href: '#' },
        { icon: FaTwitter, href: '#' },
        { icon: FaWhatsapp, href: '#' },
    ];
    
    return (
        <footer className=" max-w-7xl mx-auto bg-gray-800 text-white py-6 sm:py-8 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                    
                    <div className="order-3 lg:order-1 text-sm text-gray-400">
                        Copyright 2021 EventLab| Design By Egens Lab
                    </div>
                    
                    {/* CENTER: Logo */}
                    <div className="order-1 lg:order-2">
                        <EventLabLogo />
                    </div>
                    
                    <div className="order-2 lg:order-3 flex items-center justify-center space-x-4">
                        {socialLinks.map((item, index) => (
                            <Link 
                                key={index} 
                                href={item.href} 
                                className="text-gray-400 hover:text-white transition duration-200"
                                aria-label={`Follow us on ${item.icon.name}`}
                            >
                                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </Link>
                        ))}
                    </div>
                    
                </div>
                
                <div className="flex justify-end mt-2 pr-1.5 lg:pr-0">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                </div>

            </div>
        </footer>
    );
}

