"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 py-4 shadow">
      
      {/* LEFT: Logo */}
      <Link href="/" className="text-2xl font-bold">
        EVENTLAB
      </Link>

      {/* CENTER: Menu Links */}
      <div className="flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/events">Events</Link>
        <Link href="/contact">Contact</Link>

        {/* Dashboard Dropdown */}
        <div className="relative">
          <p
            onClick={() => setOpen(!open)}
            className="cursor-pointer select-none"
          >
            Dashboard ▾
          </p>

          {open && (
            <div className="absolute bg-white shadow-md p-3 flex flex-col top-6 left-0 w-40 rounded">
              <Link
                href="/dashboard/add-event"
                className="hover:bg-gray-100 p-2 rounded"
              >
                Add Event
              </Link>

              <Link
                href="/dashboard/manage-events"
                className="hover:bg-gray-100 p-2 rounded"
              >
                Manage Events
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Show Login/Register or User + Logout */}
      <div className="flex items-center gap-6">

        {!session ? (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        ) : (
          <>
            <p className="font-semibold">
              {session.user?.name || session.user?.email}
            </p>

            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
