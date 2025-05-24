import React, { useEffect, useRef } from "react";
import HeroSection from "../Components/Hero";
import ResourcesSection from "./Resources";
import AchievementsSection from "./Achievments";
import EventsSection from "./Events";
import ContactUs from "./ContactUs";
import Navbar from "../Components/Navbar";
import { Scrollbar } from "smooth-scrollbar-react";


const Home = () => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const { scrollbar } = scrollbarRef.current || {};
    if (scrollbar) {
      // Optional: Customize scrollbar behavior
      scrollbar.setMomentum(0, 0);
    }
  }, []);

  return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <HeroSection />
        <EventsSection />
        <AchievementsSection />
        <ResourcesSection />
        <ContactUs />     
      </div>
  );
};

export default Home;
