import React from 'react';
import StatCard from './StatCard';
import { stats } from '../../data/stats';
import AnimatedSection from '../AnimatedSection';

export default function Stats() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Production Capacity
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}