import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558583055-d7ac00b1adca?auto=format&fit=crop&q=80"
          alt="Textile Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            <span className="block">Spinning, Sizing</span>
            <span className="block text-indigo-400">and Weaving</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl"
          >
            Leading manufacturer of Yarn and Fabrics for more than 2 decades
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
          >
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#divisions"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 sm:px-8"
              >
                Our Divisions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-50 sm:px-8"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}