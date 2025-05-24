import React, { useEffect, useRef, useState } from 'react'
import HeroSection from '../Components/EventsPage/HeroSection'
import {motion} from 'framer-motion'
import Cards from '../Components/EventsPage/Cards';
import Back from '../Components/EventsPage/Nav';
const Events = () => {
  const containerRef=useRef(null);
  return (
    <>
   <div
  className="w-svw min-h-svh px-6  bg-starupHub-background bg-cover bg-no-repeat bg-center bg-black  relative"
  ref={containerRef}
>
  <Back/>
  <HeroSection />
  <Cards text={'Upcoming'}/>
  <Cards text={'Past'}/>
  {/* <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} />
  <Ball containerRef={containerRef} /> */}
</div>
    </>
  )
}



const Ball = ({ containerRef }) => {
  const ballSize = 80; // Assuming size-20 equals 80px
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateRandomPosition = () => {
      if (containerRef.current) {
        const container = containerRef.current.getBoundingClientRect();
    
        // Calculate limits: allows ball to go "partially out" but clamps it safely
        const negativeOffset = ballSize / 2;
        const maxX = container.width - ballSize / 2; // Right bound
        const maxY = container.height - ballSize / 2; // Bottom bound
    
        // Random values between negativeOffset and maxX/maxY
        const randomX =
          Math.random() * (maxX + negativeOffset) - negativeOffset;
        const randomY =
          Math.random() * (maxY + negativeOffset) - negativeOffset;
    
        setPosition({ x: randomX, y: randomY });
      }
    };
    

    updateRandomPosition();

    // Update position every 2 seconds
    const interval = setInterval(updateRandomPosition, 2000);

    return () => clearInterval(interval);
  }, [containerRef]);

  return (
    <motion.div
      className="rounded-full size-20 flex items-center justify-center border-[#22c55e] shadow-sm shadow-[#22c55e] absolute opacity-40"
      drag
      dragConstraints={containerRef}
      style={{
        width: ballSize,
        height: ballSize,
        top: 0,
        left: 0,
      }}
      animate={{
        x: position.x,
        y: position.y,
        
      }}
      transition={{
        type: 'spring',
        stiffness: 30,
        damping: 200,
      }}
      whileHover={{cursor:"pointer",scale:'1.5',opacity:'1'}}
      whileTap={{ cursor: "grabbing" }} // Changes cursor during drag
    >
      <div className="absolute inset-0"></div>
      <img src="/icons/bitcoin.svg" alt="bitcoin" className="w-full h-full" />
    </motion.div>
  );
};




export default Events