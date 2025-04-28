import React from "react";
import logo from "/engine.png";  // Adjust path as needed

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 py-6 bg-gradient-to-br from-blue-400 to-blue-101 text-white">
      <a href="#" className="flex items-center text-xl font-bold text-white">
        <img src={logo} alt="MobiusEngine Logo" className="w-45 h-10 mr-2" />
      
      </a>
      
      <div className="hidden md:flex space-x-8">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About Us</a>
        <a href="#" className="text-white">Plans</a>
        <a href="#" className="text-white">Testimonials</a>
        <a href="#" className="text-white">Privacy Policy</a>
        <a href="#" className="text-white">More</a>
      </div>
      
      <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        Get Started
      </a>
    </nav>
  );
}