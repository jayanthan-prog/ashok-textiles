import { Users, Factory, Award, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const managementFeatures = [
  {
    name: 'Spinning Division',
    description: 'Specialized in yarn production with the highest standards of quality.',
    icon: Factory
  },
  {
    name: 'Sizing Division',
    description: 'Advanced sizing techniques ensuring high-quality fabric output.',
    icon: Factory
  },
  {
    name: 'Weaving Division',
    description: 'State-of-the-art weaving processes delivering precision fabric designs.',
    icon: Factory
  },
  {
    name: 'Made-ups Production Division',
    description: 'Leading the market with high-quality made-up products for export.',
    icon: Settings
  }
];

export default function About() {
  return (
    <div id="about" className="py-32 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-6xl font-extrabold tracking-wider text-[#FFD700] drop-shadow-xl uppercase">
            Ashok Textile Mills
          </h2>
          <p className="mt-8 text-2xl leading-relaxed text-gray-300 font-light max-w-4xl mx-auto">
            Established in 1997, Ashok Textile Mills Pvt. Ltd. has been at the forefront of the textile industry for over 25 years, delivering exceptional yarns and fabrics with an unwavering commitment to quality and innovation.
          </p>
        </AnimatedSection>

        {/* Management Overview with Animation */}
        <motion.div
          className="mt-16 text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-[#FFD700]">Management</h3>
          <p className="mt-4">
            Success and consistency in the field of textile manufacturing for more than 2 decades is possible only when we have proper management. Our Managing Director Mr. P. Ashokkumar is the backbone of Ashok Textile Mills and has made all the different departments work with coordination for the final delivery of the orders.
          </p>
          <p className="mt-4">
            The efficiency of our International Standard for Quality Management System (QMS) is certified with ISO 9001:2015 certification by TUV SUD South Asia Private Limited. Ashok Textile Mill’s keen goal is to manufacture 100% quality products.
          </p>
          <p className="mt-4">
            Our proper management team is more vigilant to make sure that all the processes are carried out properly according to protocols. We ensure the delivery of global standard high-quality yarn and fabrics.
          </p>
          <p className="mt-4">
            From the cotton quality that is selected for yarn production followed by spinning, sizing, and weaving, all steps follow our Standard Operating Procedures (SOPs) accurately with highly equipped advanced Infrastructure.
          </p>
          <p className="mt-4">
            Our made-up products are of high export quality as they are manufactured using the fabrics produced in the mill. The manufacturing of Made-up products is way ahead in the market for its final finishing.
          </p>
          <p className="mt-4">
            We execute mostly a B2B business model where we export woven fabrics and yarn to other manufacturers of apparel.
          </p>
        </motion.div>

        {/* About Ashok Textile Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-[#FFD700]">About Ashok Textile Mills</h3>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            Ashok Textile Mills Pvt. Ltd. is one of the leading textile manufacturers in India, renowned for its consistent production of high-quality yarns and fabrics. Since its inception in 1997, the company has been continuously striving for excellence in textile production, adhering to global standards and customer satisfaction.
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            We specialize in a wide range of textile products including yarns, woven fabrics, and made-ups. Our state-of-the-art infrastructure, coupled with advanced technology and a dedicated team, enables us to cater to international markets while maintaining impeccable quality control throughout the manufacturing process.
          </p>
        </div>

        {/* Why Ashok Textile Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-[#FFD700]">Why Ashok Textiles</h3>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            Ashok Textile Mills Pvt. Ltd is proud to exclaim that we stand out in quality when compared to our competitors, adapting to new eco-friendly textile production technologies. Our aim is always to give 100% quality adhering to global standards for each and every product we manufacture.
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            Ashok Textile Mills Pvt. Ltd is more transparent to our clients about the manufacturing process of their orders. We are accountable to our clients through timely communication periodically of the manufacturing process.
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            Clients can easily contact our management team anytime for any enquiry on their orders.
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            We keep our promise of timely delivery. Our orders are ready before the deadline we mention to our clients. The world-level client base of Ashok Textile Mills is very satisfied with our timely delivery of orders. We have proved our excellence by winning various awards. As a successful textile exporter to Japan, we were awarded 3 prestigious awards by ABK-AOTS DOSOKAI.
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            <strong>Our Awards speak about our Excellence!</strong>
          </p>
          <ul className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto list-disc list-inside">
            <li>2011: 5’S’ Excellence award</li>
            <li>2012: 5’S’ Sustenance award</li>
            <li>2014: 5’S’ Model company award</li>
          </ul>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            Ashok Textile Mills Pvt. Ltd has acquired 5 International Certifications to prove our Global standards in terms of manufacturing high-quality Textile products and Employee welfare.
          </p>
          <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto">
            <strong>Our International Certifications are proof of our Quality!</strong>
          </p>
          <ul className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto list-disc list-inside">
            <li>SA 8000:2014</li>
            <li>ISO 9001:2015</li>
            <li>GOTS Scope</li>
            <li>GRS Scope</li>
            <li>C-TPAT SGS</li>
          </ul>
        </div>

        {/* Features Section with Animation */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {managementFeatures.map((feature, index) => (
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
