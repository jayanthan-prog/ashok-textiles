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
    <div className="bg-gradient-to-r from-gray-900 to-indigo-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading Animation */}
        <AnimatedSection className="text-center">
          <motion.h2
            className="text-4xl font-semibold text-white sm:text-5xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            INFRASTRUCTURE
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            World-Class Infrastructure with imported machinery for textile production is our backbone to attain 100% quality.
            We equip our mill with the latest technologies to enhance the efficiency of our manufacturing.
          </motion.p>
        </AnimatedSection>

        {/* Features with Animation */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: 'easeOut',
              }}
              className="flex items-center space-x-4 text-gray-300"
            >
              {/* Icon Animation */}
              <motion.div
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full shadow-lg"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>
              <motion.span
                className="text-lg font-medium text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {feature.text}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Call to Action with Animation */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            className="text-indigo-400 font-semibold hover:text-indigo-300 text-xl"
          >
            Know More in the About Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
