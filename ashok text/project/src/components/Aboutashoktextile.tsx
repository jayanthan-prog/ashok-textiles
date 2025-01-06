import { Factory, Settings, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const companyFeatures = [
  {
    name: 'Textile Manufacturing',
    description: 'State-of-the-art facilities for producing high-quality fabrics, specializing in Viscose, Modal, and Excel.',
    icon: Factory
  },
  {
    name: 'Made-ups Production',
    description: 'Expanding our production range to include world-class home textile products.',
    icon: Settings
  },
  {
    name: 'Employee Welfare',
    description: 'We prioritize a safe, healthy, and comfortable working environment for all our employees.',
    icon: Award
  },
  {
    name: 'Eco-Friendly Production',
    description: 'We are committed to environmentally friendly manufacturing practices, focusing on sustainability.',
    icon: Award
  }
];

export default function AboutAshokTextile() {
  return (
    <div id="about" className="py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-6xl font-extrabold tracking-wider text-[#FFD700] drop-shadow-xl uppercase">
            About Ashok Textile Mills
          </h2>
          <p className="mt-8 text-2xl leading-relaxed text-gray-300 font-light max-w-4xl mx-auto">
            Ashok Textile Mills Pvt. Ltd., a renowned name in textile manufacturing, has been producing high-quality yarns and fabrics for over two decades. Established in 1997, the company continuously adapts the latest technology for its production, ensuring excellence in the export market.
          </p>
        </AnimatedSection>

        {/* About Ashok Textile Overview with Animation */}
        <motion.div
          className="mt-16 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-[#FFD700]">Company Overview</h3>
          <p className="mt-4">
            Ashok Textile Mills Pvt. Ltd. specializes in yarn and fabric production, manufacturing superior quality materials like Viscose, Modal, and Excel. With over 60 million meters of fabric produced annually, we pride ourselves on consistently exceeding global standards.
          </p>
          <p className="mt-4">
            Located in the textile hub of Namakkal, Tamil Nadu, we cater to both domestic and international markets, focusing on both manufacturing and exporting products for various industries, including apparel and home textiles.
          </p>
          <p className="mt-4">
            We focus on sustainable practices in every step of our production, from raw material selection to the final product. With the latest machinery and skilled workforce, Ashok Textile Mills continues to innovate, producing fabrics and made-up products that lead the market.
          </p>
        </motion.div>

        {/* Features Section with Animation */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {companyFeatures.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center bg-gray-800 p-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:shadow-[#FFD700] hover:scale-105"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFB800] to-[#FF8C00] shadow-lg">
                <feature.icon className="h-12 w-12 text-black" aria-hidden="true" />
              </div>
              <dt className="text-2xl font-bold text-[#FFD700]">
                {feature.name}
              </dt>
              <dd className="mt-4 text-lg text-center text-gray-300">
                {feature.description}
              </dd>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-3xl font-semibold text-[#FFD700]">25+ YEARS OF EXPERIENCE</p>
          <p className="mt-6 text-lg text-gray-300">Crafting excellence in textile manufacturing and export.</p>
        </div>

        {/* Milestones Section */}
        <motion.div
          className="mt-24 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-[#FFD700]">Milestones</h3>
          <p className="mt-4">
            Ashok Textile Mills started with just 100 employees and 3,528 spindles in 1997. Today, we boast over 12,000 spindles and cutting-edge machinery for weaving, warping, and sizing, enabling the production of over 60 million meters of fabric annually.
          </p>
        </motion.div>

        {/* Background Image for Section with Animation */}
        <motion.div
          className="mt-24 relative bg-cover bg-center h-96"
          style={{ backgroundImage: 'url("https://your-image-url.com/path/to/image.jpg")' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        </motion.div>
      </div>
    </div>
  );
}
