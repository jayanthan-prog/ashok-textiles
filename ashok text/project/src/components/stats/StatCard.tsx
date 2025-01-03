import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}  // Smooth ease for premium feel
      className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-3xl shadow-xl p-8 text-center transform transition-all"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl font-semibold text-[#D4AF37] mb-3"  // Golden color for a luxury feel
      >
        {value}
      </motion.div>
      <div className="text-xl text-gray-200 font-medium">{label}</div>
    </motion.div>
  );
}
