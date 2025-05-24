import React from 'react';
import { motion } from 'framer-motion';
import Card from '../Components/Resources/Card';


const ResourcesSection = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };
  const resources = [
    {
      title: "Learn Blockchain",
      description: "Dive into the fundamentals of blockchain technology with this beginner's guide.",
      link: "https://learnblockchain.org"
    },
    {
      title: "Trading Strategies",
      description: "Master the art of trading with expert-backed strategies and tools.",
      link: "https://tradingstrategies.com"
    }
  ];

  return (
    <section className="py-10 ">
    <div className="container mx-auto px-6">
      <motion.h2 
        {...fadeInUp}
        className="text-4xl font-bold mb-12 text-center"
      >
        Learning <span className="text-green-400">Resources</span>
      </motion.h2>
      <motion.div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
   <motion.div
            className="flex gap-6 min-w-max"
            // drag="x"
            // dragConstraints={{ left: -324, right: 0 }}
            // whileTap={{ cursor: "grabbing" }}
          >        <Card title={resources[0].title} description={resources[0].description}/>
      </motion.div>
      </motion.div>
    </div>
  </section>

  );
};

export default ResourcesSection;
