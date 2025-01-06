 import { motion } from 'framer-motion';

interface DivisionCardProps {
  name: string;
  description: string;
  image: string;
}

export default function DivisionCard({ name, description, image }: DivisionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="flex flex-col items-start"
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <motion.img
          src={image}
          alt={name}
          className="aspect-[16/9] w-full object-cover sm:aspect-[3/2]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/0" />
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-indigo-600 rounded-md text-sm font-semibold hover:bg-indigo-500 transition-colors"
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}