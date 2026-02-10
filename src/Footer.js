import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Company Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-white text-xl font-bold">VersaImmortal Pvt. Ltd.</h2>
          <p>Pune, India</p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0 text-center">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VersaImmortal Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
