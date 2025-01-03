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
    <div id="about" className="py-24 sm:py-32 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#D4AF37] sm:text-6xl">
            About Ashok Textile Mills
          </h2>
          <p className="mt-6 text-2xl leading-relaxed text-gray-300">
            Founded in 1997, Ashok Textile Mills Pvt. Ltd. is situated in the heart of the Kongu region, Tamil Nādu, India—renowned for its ideal climate for yarn production, knitting, and weaving. With a commitment to excellence, our mills produce premium-quality textiles tailored to meet global standards.
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
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex flex-col items-center bg-gray-800 p-12 rounded-3xl shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FF8C00] shadow-lg transform transition-all duration-300"
                >
                  <feature.icon className="h-12 w-12 text-white" aria-hidden="true" />
                </motion.div>
                <dt className="text-2xl font-semibold text-[#D4AF37]">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg leading-8 text-gray-300 text-center">
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
