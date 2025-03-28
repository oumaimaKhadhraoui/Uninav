"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LandingMobileHeader = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  const menuItems = [
    { name: "Accueil", url: "/" },
    { name: "A propos", url: "/about-us" },
    { name: "Contact", url: "/contact-us" },
    { name: "Carte Collaborative", url: "/carte-collaborative" },
  ];

  return (
    <div className="md:hidden">
      <header className="mobile-header ">
        <div className="relative right-0">
          {/* Menu Trigger */}
          <button onClick={() => setOpen(true)} className="cursor-pointer">
            <Image
              src="/menu.svg"
              alt="Menu"
              width={30}
              height={30}
            />
          </button>

          {/* Mobile Menu Content */}
          {open && (
            <div className="fixed inset-0 bg-white h-screen w-[40%] right-0 px-3 z-50">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/close-dark.svg" // Assuming you have a close icon
                  alt="Close"
                  width={24}
                  height={24}
                />
              </button>

              {/* Navigation */}
              <nav className="mt-10">
                <ul className="space-y-2">
                  {menuItems.map(({ url, name }) => (
                    <li key={name}>
                      <Link
                        href={url}
                        className={`flex items-center px-6 h-[50px] font-semibold transition-colors
                          ${
                            pathname === url
                              ? "text-yellow-400 border-b-2 border-yellow-400"
                              : "text-gray-600 hover:text-yellow-300"
                          }`}
                        onClick={() => setOpen(false)}
                      >
                        <p>{name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Separator */}
              <div className="my-5 h-px bg-gray-200/20" />

             

              {/* Buttons */}
              <div className="space-x-4 flex items-center justify-center my-8">
                <Link href="/sign-in">
                  <button className="bg-yellow-400 text-black rounded-full px-7 sm:px-10 py-2 font-bold hover:bg-yellow-500 transition-colors">
                    Login
                  </button>
                </Link>
                <Link href="/sign-up">
                  <button className="bg-white text-yellow-400 rounded-full px-7 sm:px-10 py-2 font-bold hover:bg-gray-100 transition-colors">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default LandingMobileHeader;