import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <img
          src="https://ashoktextilemills.com/file/wp-content/uploads/2023/03/home-1.jpg"
          alt="Textile Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex items-center justify-center h-full max-w-7xl mx-auto py-36 px-4 sm:py-48 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-6 text-white"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block">Spinning, Sizing</span>
            <span className="block text-indigo-500">and Weaving Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-4 max-w-3xl mx-auto text-2xl text-gray-200 sm:max-w-4xl"
          >
            Leading manufacturer of Yarn and Fabrics for over two decades with world-class craftsmanship.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
          >
            <div className="space-y-6 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#divisions"
                className="flex items-center justify-center px-8 py-4 border border-transparent text-xl font-semibold rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 sm:px-10"
              >
                Explore Our Divisions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center justify-center px-8 py-4 border border-transparent text-xl font-semibold rounded-lg shadow-md text-indigo-600 bg-white hover:bg-gray-50 sm:px-10"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
