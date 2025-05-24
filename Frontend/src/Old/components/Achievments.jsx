import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const achievementsData = [
  "World Quant Brain in association with IIT Dhanbad, conducted the IIT (ISM) Alphathon, spanning 3 weeks from September 30 to October 23. The competition attracted more than 650 students across the college and was a huge success. The alphathon demonstrated the Fintech Club members extraordinary abilities, with 9 of them placing among the top 20 positions. Vaibhav Kashyap, Aman Agarwal and Manish Rulania got 2nd, 3rd and 4th rank respectively.",
  "Our Fintech Club members got 8th position in Inter IIT Tech Meet’23 held at IIT Madras in the High Prep Problem statement by Worldquant.",
  "Fintech Club members and the entire team won a Bronze medal in the mid-prep problem statement named 'Metamasks Snaps Problem' given by ConSenSys at Inter IIT Tech Meet’22 11.0 held at IIT Kanpur.",
  "Mohneesh Swami Sir collaborated with Tribhuvan Bisen at the Options Symposium 6.0 Conference, held at the Bombay Stock Exchange (BSE). Their primary task involved identifying conditions and factors for selling options across different time frames and close-open gap buckets and also delved into explaining gamma risk, theta decay patterns, and the impact of multiplying skew factors in various market conditions, while also determining the optimal expiry DTE based on these factors. His main part involved in coding out the stuffs and doing statistical analysis on various factors.",
  "Team DREAM-WEB, consisting of Mohneesh Kumar Swami, Harshit Agarwal and Digvijay Anand emerged as the Finalist in Morgan Stanley’s Code-to-Give Hackathon’23. Team DREAM-WEB secured a spot among the top 4, earning tremendous praise from the esteemed panel.",
  "Rohan Kumar, Raj Pandey formed a team (Renaissance) and participated in the IQC (international Quant Championship) and Secured an International rank of 290 among 30000+ teams making them within the top 1% of competitors.",
  "Aman Agarwal secured the first runner-up position in 'Startup Concurso', a part of the BizThon : The Global Business Hackathon hosted by IIT BHU and organized by E Cell IIT BHU.",
  "Rohan Kumar participated in Alphaverse premier league (an alpha making competition by Alphagrep) secured a global rank of 31 among thousand participants from prestigious colleges.",
  "Team Consist of Vaibhav Kashyap, Manish Rulania, Aman Agarwal participated in FINALYST conducted as part of interface 2023 and Secured 2 position.",
];

const Achievments = () => {
  const [cards,setCards]=useState([0,1,2,3]);
  const [toggle,setToggle]=useState(true);
  console.log(cards);
  const handleClick=()=>{
    const newCards=cards.map((el)=>{return (el+4)%achievementsData.length});
    setToggle((prev)=>!prev);
    setCards(newCards);
  }
  return (
    <div className="p-6 bg-[#dcefd8] flex flex-col gap-4 rounded-[20px] border-[1px] shadow-green-400 border-solid border-green-400 pt-24 pb-[3rem] relative">
      <div className="w-fit px-2 bg-black h-20 absolute top-[-1px] left-12 border-t-0 rounded-t-none rounded-[20px] border-[1px] border-solid border-green-400">
        <div className="w-full h-full text-center text-[#e2f164] text-2xl md:text-5xl">
          Achievments
        </div>
      </div>
      <div
  className="w-[10rem] flex items-center gap-2 cursor-pointer justify-center bg-black h-10 absolute bottom-[-1px] right-0 border-b-0 border-r-0 rounded-b-none rounded-[20px] border-[1px] border-solid border-green-400"
  onClick={handleClick}
>
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: toggle ? 180 : 0 }} // Rotate 180 degrees on toggle
    transition={{ duration: 0.5 }}
    className="text-[#e2f164] size-[1rem]"
  >
    <Plus size={"1rem"} />
  </motion.div>
  <div className="text-[#e2f164] text-[1rem]">Load More</div>
</div>
      <motion.div className={`w-full flex items-center ${toggle?'justify-start':'justify-end'}`}
        //  key={cards[0]}
         initial={{ opacity: 0.5, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0.5, scale: 0.8 }}
         transition={{type:'spring', duration: 0.5 }}
      >
        <Card text={achievementsData[cards[0]]} />
      </motion.div>
      <motion.div className={`w-full flex items-center ${toggle?'justify-end':'justify-start'}`}
        //  key={cards[1]}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         transition={{type:'spring', duration: 0.5 }}
      >
        <Card text={achievementsData[cards[1]]} />
      </motion.div>
      <motion.div className={`w-full flex items-center ${toggle?'justify-start':'justify-end'}`}
        //  key={cards[2]}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         transition={{type:'spring', duration: 0.5 }}
      >
        <Card text={achievementsData[cards[2]]} />
      </motion.div>
      <motion.div className={`w-full flex items-center ${toggle?'justify-end':'justify-start'}`}
        //  key={cards[3]}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         transition={{type:'spring', duration: 0.5 }}
      >
        <Card text={achievementsData[cards[3]]} />
      </motion.div>
    </div>
  );
};

export default Achievments;

const Card = ({ text }) => {
  return (
    <motion.div
   
      layout
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0, scale: 0.9 }}
      // transition={{ duration: 0.5 }}
      className="text-[1rem] leading-normal h-32 w-full md:w-1/2  font-semibold shadow-[inset_0_3px_5px_rgba(0,0,0,0.5)] rounded-[20px] p-4"
    >
      <motion.div
       key={text}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} 
        className="overflow-y-auto h-full pr-1 text-gray-600"
      >
        {text}
      </motion.div>
    </motion.div>
  );
};

