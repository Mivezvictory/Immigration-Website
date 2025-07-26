// src/components/SocialFooter.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function SocialFooter() {
  return (
    <footer className="bg-gray-800 py-8 margin-top-8">
      <div className="container mx-auto flex justify-center space-x-8 md:space-x-10">
        <a href="#" className="text-gray-400 hover:text-white text-xl md:text-2xl px-2 margin-right-2">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-xl md:text-2xl px-2">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-xl md:text-2xl px-2">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-gray-400 hover:text-white text-xl md:text-2xl px-2">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
