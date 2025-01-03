import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { staggerChildren } from '../utils/animations';

const products = [
  {
    name: 'Cotton Fabrics',
    description: 'High-quality cotton fabrics for various applications',
    image: 'https://images.unsplash.com/photo-1596468138838-0f33ffa0173c?auto=format&fit=crop&q=80'
  },
  {
    name: 'Synthetic Textiles',
    description: 'Durable synthetic materials for modern needs',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80'
  },
  {
    name: 'Blended Fabrics',
    description: 'Perfect combination of natural and synthetic fibers',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80'
  },
  {
    name: 'Technical Textiles',
    description: 'Specialized fabrics for industrial applications',
    image: 'https://images.unsplash.com/photo-1573766917336-f0b26ed75cef?auto=format&fit=crop&q=80'
  }
];

export default function Products() {
  return (
    <div id="products" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover our wide range of high-quality textile products
          </p>
        </AnimatedSection>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {products.map((product) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-start"
            >
              <div className="w-full overflow-hidden rounded-2xl">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[16/9] w-full object-cover sm:aspect-[3/2]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="max-w-xl mt-8">
                <h3 className="text-lg font-semibold leading-6 text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}