"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Our Map", href: "/map" },
  { name: "My Bookmarks", href: "/profile" },
];

const LandingNavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-transparent hidden md:block">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex gap-2 xl:gap-4 items-center">
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={item.href}
                className={`transition-all duration-300 ease-in-out px-3 py-2 
                  ${
                    pathname === item.href
                      ? "text-yellow-400 font-semibold border-b-2 border-yellow-400 transform scale-105"
                      : "text-white hover:text-[#B58E40] hover:scale-105"
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavBar;