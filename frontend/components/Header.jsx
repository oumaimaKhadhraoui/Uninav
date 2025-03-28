"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LandingNavBar from "./Navbar";
import LandingMobileHeader from "./LandingMobileHeader";

const LandingHeader = () => {
  const pathname = usePathname();
  const [user, setUser] = useState(null); // State to store user data

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/me", {
          method: "GET",
          credentials: "include", // Include cookies in the request
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data); // Set user data if logged in
        } else {
          setUser(null); // User is not logged in
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setUser(null); // Handle errors gracefully
      }
    };

    fetchUser();
  }, []);

  return (
    <header
      className="m-4 bg-[#780C05] rounded-lg shadow-lg shadow-gray-500/50"
    >
      <div className="p-3 flex justify-between lg:justify-evenly gap-2 items-center bg-transparent w-full">
        {/* Logo */}
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="logo"
          className="sm:h-20 h-auto w-auto"
        />

        {/* Desktop Navigation */}
        <LandingNavBar />

        {/* Conditional Rendering for User */}
        {user ? (
          // If user is logged in, show avatar and username
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-full text-black font-bold">
              {user.username.charAt(0).toUpperCase()} {/* First letter of username */}
            </div>
            <span className="text-black font-medium">{user.username}</span>
          </div>
        ) : (
          // If user is not logged in, show Login/Signup buttons
          <div className="hidden lg:block space-x-4">
            <Link href="/sign-in">
              <button className="bg-yellow-400 text-black rounded-full px-10 py-2 font-bold hover:bg-yellow-500 transition-colors">
                Login
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-white text-yellow-400 rounded-full px-10 py-2 font-bold hover:bg-gray-100 transition-colors">
                Sign up
              </button>
            </Link>
          </div>
        )}

        {/* Mobile Header */}
        <LandingMobileHeader />
      </div>
    </header>
  );
};

export default LandingHeader;