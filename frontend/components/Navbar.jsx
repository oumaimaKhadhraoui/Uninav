"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { name: "Accueil", href: "/" },
  { name: "A propos", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
  { name: "Carte Collaborative", href: "/carte-collaborative" },
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
                className={`transition-all duration-300 ease-in-out px-3 py-2 rounded-md
                  ${
                    pathname === item.href
                      ? "text-[#B58E40] font-semibold border-b-2 border-[#B58E40] transform scale-105"
                      : "text-gray-600 hover:text-[#B58E40] hover:scale-105"
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