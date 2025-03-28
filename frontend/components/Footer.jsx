import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Array for the links in the third column
const links = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Map', href: '/map' },
  { name: 'My Bookmarks', href: '/profile' },
];

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-[#780C05] text-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Column 1 - Logo */}
          <div className=" text-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Column 2 - Information */}
          <div>
            <h3 className="text-lg font-bold">Information</h3>
            <p className="mt-4 text-sm w-[60%] opacity-80">
              Welcome to UniNav, your go-to platform for campus connectivity, events, and student resources.
            </p>
          </div>

          {/* Column 3 - Links from Array */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-[#B58E40]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Information */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-sm opacity-80">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>contact@univnav.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>123 Campus Manar, University City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-80">Copyright © 2025 UniNav</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
