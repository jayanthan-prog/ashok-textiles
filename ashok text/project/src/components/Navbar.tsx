import React, { useState } from 'react';
import { Factory, Menu, X } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#products', label: 'Products' },
  { href: '#quality', label: 'Quality' },
  { href: '#csr', label: 'CSR' },
  { href: '#career', label: 'Career' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Factory className="h-10 w-10 text-[#D4AF37]" />
            <span className="text-3xl font-medium text-white">Ashok Textile Mills</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#D4AF37] transition duration-300 text-lg font-normal"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-gray-900 bg-opacity-95 border-t border-gray-600 shadow-xl">
          <div className="px-6 pt-6 pb-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-white hover:text-[#D4AF37] hover:bg-gray-800 transition duration-200 text-xl font-normal"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
