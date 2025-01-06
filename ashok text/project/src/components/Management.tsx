import React from 'react';

interface ManagementMember {
  name: string;
  role: string;
  image: string;
}

const managementTeam: ManagementMember[] = [
  {
    name: 'Mr. P. Ashokkumar',
    role: 'Managing Director',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'John Doe',
    role: 'CEO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    role: 'COO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    role: 'CFO',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Williams',
    role: 'CTO',
    image: 'https://via.placeholder.com/150',
  },
];

const Management: React.FC = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#001f3d] mb-6">Management</h1>
        <p className="text-lg text-[#4b6c8f] mb-12">
          Success and consistency in the field of textile manufacturing for more than two decades is possible only when we have proper management. Our Managing Director Mr. P. Ashokkumar is the backbone of Ashok Textile Mills and has made all the different departments work with coordination for the final delivery of the orders.
        </p>
        <p className="text-lg text-[#4b6c8f] mb-12">
          The efficiency of our International Standard for Quality Management System (QMS) is certified with ISO 9001:2015 certification by TUV SUD South Asia Private Limited. Ashok Textile Mills’ keen goal is to manufacture 100% quality products. Our proper management team ensures that all processes are carried out properly according to protocols. We ensure the delivery of global standard high-quality yarn and fabrics.
        </p>
        <p className="text-lg text-[#4b6c8f] mb-12">
          From the cotton quality selected for yarn production, followed by spinning, sizing, and weaving, we follow our Standard Operating Procedures (SOPs) accurately with highly equipped advanced infrastructure. Our made-up products are of high export quality, manufactured using the fabrics produced in the mill. The manufacturing of Made-up products is way ahead in the market for its final finishing.
        </p>
        <p className="text-lg text-[#4b6c8f] mb-12">
          We mostly execute a B2B business model where we export woven fabrics and yarn to other manufacturers of apparel.
        </p>
        
        <h2 className="text-2xl font-semibold text-[#001f3d] mb-6">Various Divisions of Ashok Textile Mills</h2>
        <ul className="list-disc pl-8 text-lg text-[#4b6c8f] mb-12">
          <li>Spinning Division</li>
          <li>Sizing Division</li>
          <li>Weaving Division</li>
          <li>Made-ups Production Division</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-[#001f3d] mb-6">Our Management Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {managementTeam.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#001f3d]">{member.name}</h3>
              <p className="text-lg text-[#4b6c8f]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
