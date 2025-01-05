 import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Users, Award, Settings, Factory } from 'lucide-react';

const features = [
  {
    icon: Users,
    text: '500+ Employees'
  },
  {
    icon: Factory,
    text: 'Experts in Yarns & Woven Fabrics'
  },
  {
    icon: Award,
    text: 'Quality Management System (QMS)'
  },
  {
    icon: Settings,
    text: 'Customization of Textile Products'
  }
];

export default function Infrastructure() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">INFRASTRUCTURE</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            World-Class Infrastructure with imported machinery for Textile production is our backbone to attain 100% quality. 
            We equip our mill with the latest technologies to increase the efficiency of our manufacturing.
          </p>
        </AnimatedSection>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-3 text-gray-700"
            >
              <feature.icon className="h-6 w-6 text-indigo-600" />
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-indigo-600 font-semibold hover:text-indigo-500"
          >
            Know More in the about us
          </motion.a>
        </div>
      </div>
    </div>
  );
}