import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Award, BookOpen, Calendar, ArrowRight, Trophy, Medal, Presentation, Menu, X, Coins,Star } from 'lucide-react';

const AchievementsSection = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      };
  const achievements = [
    {
      title: "National Hackathon Winners",
      description: "Secured 1st place at the FinTech National Hackathon 2024.",
      icon: <Award className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Blockchain Pioneers",
      description: "Developed a pioneering blockchain solution for microfinance.",
      icon: <TrendingUp className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Top 10 FinTech Clubs",
      description: "Ranked among the top 10 college FinTech clubs in India.",
      icon: <Star className="w-10 h-10 text-green-400" />,
    },
  ];

  return (
    <section className="py-20 bg-zinc-900 mb-10">
    <div className="container mx-auto px-6">
      <motion.h2 
        {...fadeInUp}
        className="text-4xl font-bold mb-12 text-center"
      >
        Our <span className="text-green-400">Achievements</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <Trophy className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">IIT (ISM) Alphathon Success</h3>
              <p className="text-gray-400">
                World Quant Brain in association with IIT Dhanbad conducted the IIT (ISM) Alphathon, spanning 3 weeks. With over 650 participants, 9 Fintech Club members placed in top 20. Vaibhav Kashyap, Aman Agarwal and Manish Rulania secured 2nd, 3rd and 4th ranks respectively.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <Medal className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Inter IIT Tech Meet'23</h3>
              <p className="text-gray-400">
                Our Fintech Club members achieved 8th position in Inter IIT Tech Meet'23 held at IIT Madras in the High Prep Problem statement by Worldquant.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-black/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Bronze at Inter IIT Tech Meet'22</h3>
              <p className="text-gray-400">
                Won Bronze medal in the mid-prep problem statement "Metamasks Snaps Problem" by ConSenSys at Inter IIT Tech Meet'22 11.0 held at IIT Kanpur.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-black/50 p-6 rounded-xl backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <Presentation className="w-8 h-8 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Options Symposium 6.0</h3>
              <p className="text-gray-400">
                Mohneesh Swami Sir collaborated with Tribhuvan Bisen at the Options Symposium 6.0 Conference at BSE, focusing on options trading analysis and statistical modeling of market factors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  );
};

export default AchievementsSection;
