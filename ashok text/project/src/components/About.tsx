import React from 'react';
import { Users, Factory, Award, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    name: '500+ Employees',
    description: 'Dedicated workforce driving our success',
    icon: Users
  },
  {
    name: 'Expert Manufacturing',
    description: 'Experts in Yarns & Woven Fabrics',
    icon: Factory
  },
  {
    name: 'Quality Management',
    description: 'ISO certified Quality Management System (QMS)',
    icon: Award
  },
  {
    name: 'Customization',
    description: 'Customization of Textile Products',
    icon: Settings
  }
];

export default function About() {
  return (
    <div id="about" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Ashok Textile Mills
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Started in 1997, Ashok Textile Mills Pvt.Ltd is located in the Namakkal district of the Kongu region of Tamil Nādu, India. The Kongu Nādu belt is famous for its climatic conditions suitable for yarn production, knitting and weaving along with the richness of soil to cultivate high-quality cotton.
          </p>
        </AnimatedSection>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600"
                >
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </motion.div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-sm leading-7 text-gray-600 text-center">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}