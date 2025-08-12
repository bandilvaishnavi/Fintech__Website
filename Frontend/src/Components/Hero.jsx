import React from 'react';
import { motion } from 'framer-motion';
import { Coins, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&q=80"
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Coins className="w-20 h-20 text-green-400 mx-auto" />
          </motion.div>
          <motion.h1 
            className="text-7xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-green-400">FinTech</span> Club
          </motion.h1>
          <motion.h2 
            className="text-3xl font-semibold mb-8 text-gray-400"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Indian Institute of Technology (Indian School of Mines) DHANBAD
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Empowering future leaders in financial technology through innovation, education, and excellence
          </motion.p>
          {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4 justify-center"
          > */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-400 transition-colors"
            >
              Join Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-green-400 text-green-400 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-400/10 transition-colors"
            >
              Learn More
            </motion.button> */}
          {/* </motion.div> */}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-green-400"
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
