"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaGoogle } from 'react-icons/fa'; // Install react-icons for the Google logo

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading feedback

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Start loading feedback

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) { // Check if the response status is not OK (e.g., 400, 500)
        setError(data.error || "An unexpected error occurred.");
      } else {
        // Assuming successful registration, redirect to login
        router.push("/login?message=registration_success");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false); // End loading feedback
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Register Card Container */}
      <div className="w-full max-w-md space-y-8 bg-white p-8 sm:p-10 shadow-xl rounded-2xl">
        
        {/* Header */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your EventLab account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/login" className="font-medium text-pink-600 hover:text-pink-500">
              sign in to an existing account
            </Link>
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm font-medium text-pink-700">{error}</div>
          </div>
        )}

        {/* Registration Form */}
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Name Input */}
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
            
            {/* Email Input */}
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
            
            {/* Password Input */}
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading ? 'bg-pink-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
              } transition duration-150`}
            >
              {loading ? 'Registering...' : 'Sign up with Email'}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center">
            <hr className="w-1/3 border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <hr className="w-1/3 border-gray-300" />
        </div>
        
        {/* Google Sign-up Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150"
        >
          <FaGoogle className="w-5 h-5 mr-3 text-pink-500" />
          Continue with Google
        </button>
        
      </div>
    </div>
  );
}