import React from 'react';
import DivisionHeader from './DivisionHeader';
import DivisionCard from './DivisionCard';
import { divisions } from '../../data/divisions';

export default function Divisions() {
  return (
    <div id="divisions" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <DivisionHeader />
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {divisions.map((division) => (
            <DivisionCard key={division.name} {...division} />
          ))}
        </div>
      </div>
    </div>
  );
}