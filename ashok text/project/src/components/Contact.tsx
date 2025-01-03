import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id="contact" className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-4xl font-extrabold tracking-tight text-[#D4AF37] sm:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Reach out for inquiries, support, or partnership opportunities.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Contact Information Section */}
          <motion.div 
            className="rounded-3xl bg-gray-800 p-10 shadow-2xl hover:shadow-3xl transform transition-all duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-[#D4AF37]">Contact Information</h3>
            <dl className="mt-3 space-y-6">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <MapPin className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
                </dt>
                <dd className="text-lg leading-7 text-gray-300">
                  10/243, Thuraiyur Main Road,<br />
                  Ponneri (PO)<br />
                  Namakkal – 637013 Tamil Nadu, India.
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <Phone className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
                </dt>
                <dd className="text-lg leading-7 text-gray-300">
                  <a href="tel:+91 98433 99161" className="hover:text-indigo-600">+91 98433 99161</a> <br />
                  <a href="tel:04286 253077" className="hover:text-indigo-600">04286 253077</a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <Mail className="h-7 w-7 text-[#D4AF37]" aria-hidden="true" />
                </dt>
                <dd className="text-lg leading-7 text-gray-300">
                  <a href="mailto:info@ashoktextilemills.com" className="hover:text-indigo-600">
                    contactus@ashoktextilemills.com
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Contact Form Section */}
          <motion.form 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium leading-6 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-2 block w-full rounded-xl border-2 border-gray-300 bg-gray-900 px-4 py-3 text-gray-200 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-lg transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-2 block w-full rounded-xl border-2 border-gray-300 bg-gray-900 px-4 py-3 text-gray-200 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-lg transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium leading-6 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-2 block w-full rounded-xl border-2 border-gray-300 bg-gray-900 px-4 py-3 text-gray-200 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none sm:text-lg transition-all duration-300"
              />
            </div>
            <motion.button
              type="submit"
              className="mt-6 rounded-xl bg-[#D4AF37] px-6 py-3 text-center text-lg font-semibold text-black shadow-lg hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
