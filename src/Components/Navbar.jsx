"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Install @heroicons/react

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls mobile menu visibility
  const [isDashboardOpen, setIsDashboardOpen] = useState(false); // Controls dashboard dropdown

  // --- Helper Components for Cleanliness ---

  // Component for standard navigation links
  const NavLinks = ({ onClick }) => (
    <>
      <Link href="/" onClick={onClick}>Home</Link>
      <Link href="/about" onClick={onClick}>About</Link>
      <Link href="/events" onClick={onClick}>Events</Link>
      <Link href="/contact" onClick={onClick}>Contact</Link>
    </>
  );

  // Component for Auth/User status
  const AuthStatus = () => (
    <>
      {!session ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      ) : (
        <>
          <p className="font-semibold text-sm">
            {session.user?.name || session.user?.email}
          </p>
          <button
            onClick={() => signOut()}
            className="bg-pink-700/80 text-white px-4 py-1 rounded hover:bg-pink-400 transition"
          >
            Logout
          </button>
        </>
      )}
    </>
  );

  return (
    <div className="shadow sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
        {/* LEFT: Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          <span className="text-pink-700/80">E</span>VENT<span className="text-pink-700/80">L</span>AB
        </Link>

        {/* --- DESKTOP VIEW (Hidden on Mobile) --- */}
        <div className="hidden lg:flex items-center gap-8">
          
          {/* CENTER: Menu Links */}
          <div className="flex items-center gap-8">
            <NavLinks />
            
            {/* Dashboard Dropdown */}
            <div className="relative">
              <p
                onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                className="cursor-pointer select-none hover:text-gray-700"
              >
                Dashboard ▾
              </p>

              {isDashboardOpen && (
                <div 
                  className="absolute bg-white shadow-lg border border-gray-100 p-2 flex flex-col top-8 right-0 w-48 rounded z-50"
                  onBlur={() => setIsDashboardOpen(false)} // Optional: Close on outside click/focus loss
                >
                  <Link
                    href="/add-events"
                    className="hover:bg-gray-100 p-2 rounded whitespace-nowrap"
                    onClick={() => setIsDashboardOpen(false)}
                  >
                    Add Event
                  </Link>

                  <Link
                    href="/manage-events"
                    className="hover:bg-gray-100 p-2 rounded whitespace-nowrap"
                    onClick={() => setIsDashboardOpen(false)}
                  >
                    Manage Events
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Auth Links */}
          <div className="flex items-center gap-6">
            <AuthStatus />
          </div>
        </div>
        
        {/* --- MOBILE TOGGLE BUTTON (Visible on Mobile) --- */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" /> // Close Icon
            ) : (
              <Bars3Icon className="h-6 w-6" /> // Menu Icon
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU PANEL (Conditionally Rendered) --- */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        } border-t border-gray-100`}
      >
        <div className="flex flex-col space-y-3 px-4 sm:px-6 pb-4">
          
          {/* Mobile Nav Links */}
          <NavLinks onClick={() => setIsMenuOpen(false)} />

          <hr className="my-2 border-gray-200" />
          
          {/* Mobile Dashboard Links */}
          <div className="flex flex-col space-y-2 pl-4">
            <p className="font-semibold text-gray-500 pt-1">Dashboard</p>
            <Link
              href="/add-events"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Event
            </Link>
            <Link
              href="/manage-events"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Manage Events
            </Link>
          </div>
          
          <hr className="my-2 border-gray-200" />

          {/* Mobile Auth Status */}
          <div className="flex flex-col space-y-2 mt-2">
            <AuthStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

// NOTE: You will need to install the heroicons library to use the icons:
// npm install @heroicons/react