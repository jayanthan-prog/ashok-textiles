 import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const divisions = [
  {
    name: 'Spinning',
    description: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1573766917336-f0b26ed75cef?auto=format&fit=crop&q=80'
  },
  {
    name: 'Sizing',
    description: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80'
  },
  {
    name: 'Weaving',
    description: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80'
  },
  {
    name: 'Made-ups',
    description: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1596468138838-0f33ffa0173c?auto=format&fit=crop&q=80'
  }
];

export default function Divisions() {
  return (
    <div id="divisions" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Divisions</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We produce all kinds of textile products from Yarn to Fabrics. Our major business is B2B where we export our products to apparel manufacturers.
          </p>
        </AnimatedSection>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {divisions.map((division, index) => (
            <motion.article
              key={division.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <motion.img
                  src={division.image}
                  alt={division.name}
                  className="aspect-[16/9] w-full object-cover sm:aspect-[3/2]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0"></div>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{division.name}</h3>
                  <p className="mt-2">{division.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    READ MORE
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}