import React, { useState } from "react";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
const Card = ({title,description}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
    to={'https://medium.com/@fintech_club/spurious-regression-part-1-19df9dfeaeef'}
    target="_blank"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="w-[300px] p-2  rounded-[24px] cursor-pointer relative flex flex-col items-start gap-4 justify-between overflow-hidden"
      
    >
      <motion.div 
      className=" z-[6] absolute text-[#262d29] top-[1.15em] right-[1.2em] font-bold"
      initial={{opacity:"0",translateX:"-6px",translateY:"6px"}}
      animate={{opacity:hover?"0.6":"0",translateX:hover?"0px":"-6px",translateY:hover?"0px":"6px"}}
      >
        <svg
          width="0.9em"
          height="0.9em"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5858 2L1.00003 2V0L16 0C16.5523 0 17 0.447715 17 1V16L15 16V3.41421L1.90384 16.5104L0.489624 15.0962L13.5858 2Z"
            fill="white"
          />
        </svg>
      </motion.div>
      <motion.div 
    className="absolute top-[0] z-[5] scale-x-0 scale-y-0 origin-top-right right-[0]"
    initial={{ scaleX: 0,scaleY:0 }}
    animate={{
        scaleX: hover ? 1 : 0,
        scaleY: hover ? 1 : 0,
        // scaleZ: hover ? 1 : 0,
        transition: { duration: 0.3 }
    }}
>
    <div className="">

    <CustomSVG/>
    </div>

</motion.div>
        <div className="w-full object-cover rounded-[24px] relative overflow-hidden">
            <motion.div className="absolute w-full h-full backdrop-blur-md top-0 rounded-[24px] bottom-0 left-0 right-0 bg-[#0000004d] flex flex-col justify-center items-center"
                animate={{opacity:hover?'1':'0'}}
                
            >
                <div className="w-full h-[40%] relative flex justify-center items-center overflow-hidden">
                    <motion.div className=" absolute bottom-[-40%]" 
                        animate={{translateY:hover?"-200%":'0'}}
                        transition={{type:"spring",damping:15}}
                    >
                    <h1 className="text-[1em] font-normal opacity-60 text-[#dcefd8]">Read More</h1>
                    </motion.div>
                </div>
            </motion.div>
            
            <img src="https://assets.datamation.com/uploads/2023/09/dm_09072023-what-is-regression-analysis.png"/>
        </div>
        <div className="w-full flex justify-between ">
            <h1 className="text-gray-100 font-normal opacity-40 sm:text-xs md:text-sm ">Blog</h1>
            <h1 className="text-gray-100 font-normal opacity-40 sm:text-xs md:text-sm ">October 23, 2023</h1>
        </div>
        <div>
            <h1 className="text-white font-medium leading-[1.2] line-clamp-2 max-sm:text-[1.3rem] sm:text-[1.75rem] ">
            Spurious Regression
            </h1>
        </div>
            <div className="bg-zinc-800/50 border-green-400/10 border-solid px-4 py-2 rounded-[24px]">
            <h1 className="text-green-400 font-medium opacity-70 text-sm ">Regression</h1>
        </div>
    </Link>
  );
};

const CustomSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="80"
    height="80"
    viewBox="0 0 139 139"
    fill="none"
  >
    <g clipPath="url(#clip0_464_133)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M100 100C121.539 100 139 117.461 139 139L139 100L139 0L39 4.37114e-06L-6.07588e-06 6.07588e-06C21.539 5.13438e-06 39 17.461 39 39L39 76C39 89.2549 49.7451 100 63 100L100 100Z"
        fill="#000000"
      />
    </g>
    <defs>
      <clipPath id="clip0_464_133">
        <rect
          width="139"
          height="139"
          fill="white"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 139 139)"
        />
      </clipPath>
    </defs>
  </svg>
);


export default Card;
