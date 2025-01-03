import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold text-indigo-600 mb-2"
      >
        {value}
      </motion.div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}