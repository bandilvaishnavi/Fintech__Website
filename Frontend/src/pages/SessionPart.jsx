import React from "react";
import SessionCard from "./SessionInfoCard";

const sessions = [
  {
    title:"The Architect: Pan-IIT Quant Finance Hackathon by Zelta Labs",
    description:`The Architect by Zelta Labs is a Pan-IIT hackathon designed to ignite innovation in quantitative finance. Bringing together top minds from across the IITs, the event challenged participants with real-world problems in trading strategy, data analysis, and financial modeling.
   Simulating high-stakes market environments, The Architect pushed boundaries and inspired the next generation of fintech leaders.
   The event fostered a spirit of collaboration, critical thinking, and technical excellence. Participants left with new insights, connections, and a glimpse into the dynamic world of algorithmic finance.`,
    image:"/Session5.jpg"
  },
  {
    title:"Matiks: A Battle of Speed, Logic, and Numbers",
    description:`Matiks was an electrifying offline event that brought together over 300 math enthusiasts in a high-intensity challenge of speed and accuracy. Participants were tasked with solving 100 mathematical questions within just 60 minutes—testing their aptitude, focus, and time management under pressure.
   After the initial round, the top 30 performers advanced to a thrilling 1v1 knockout tournament, where they battled head-to-head on rapid simplification problems. The atmosphere was charged with energy as each round saw brilliant minds go toe-to-toe in fast-paced mental duels.`,
    image:"/Session6.jpg"
  },

  {
    title: "Diving into the Quant Realm - Session with Tribhuvan Bisen ",
    description: `On October 19th, during Concetto 2024 at IIT (ISM) Dhanbad, the FinTech Club had the pleasure of hosting Tribhuvan Bisen, Co-founder of Quant Insider, for an engaging session on Quantitative Finance.
He walked us through the core principles of quant finance, its growing role in today’s financial markets, and how data-driven strategies and advanced models are transforming the trading landscape. The session also shed light on the journey to becoming a successful quant trader and the steps to transition into research in this exciting domain.
It was an interactive and inspiring session that gave attendees a clearer perspective on the intersection of finance and technology.`,
    image: "/Session1.jpg",
  },
  {
    title: "Blockchain & Freelancing Reinvented - Session with Aman Agarwal, Founder of Grull.work",
    description: `During Concetto 2024 at IIT (ISM) Dhanbad, the FinTech and Tech communities had the privilege of hosting Aman Agarwal, founder of Grull.work. Aman shared his journey of building a blockchain-powered freelancing platform and the revolutionary role of secure, transparent transactions in creative collaboration. From leveraging AI for project matchmaking to scaling Grull to 5,000+ projects, his insights offered a compelling look at the future of design and tech-enabled freelancing. The session inspired budding entrepreneurs to blend cutting-edge technology with real-world applications for greater impact.`,
    image: "/Session2.jpg",
  },
  {
    title: "Decoding High-Frequency Trading - Session with Ansh Tayal from NSE India",
    description: `On March 16th, 2024, the FinTech Club at IIT (ISM) Dhanbad hosted Mr. Ansh Tayal from NSE India for a deeply engaging session on High-Frequency Trading (HFT). The session offered students a comprehensive introduction to the fast-paced world of HFT — covering its core mechanisms, technical intricacies, and evolving career opportunities in algorithmic trading. With over 300 attendees at Penman Auditorium, the event served as an eye-opener into one of the most dynamic sectors of finance, inspiring students to explore the intersection of technology and trading at scale.`,
    image: "/Session3.jpeg",
  },
  {
    title:"Entrepreneurship Unplugged – Workshop with Abhishek Kar at IIT (ISM) Dhanbad",
    description:`On February 19th, 2023, the FinTech Club, in collaboration with NVCTI IIT (ISM), successfully hosted a dynamic workshop on Entrepreneurship Skills, Attitude, and Behaviour Development under the Ministry of Education’s IIC Calendar. The session featured Abhishek Kar — a renowned YouTube influencer, TEDx speaker, angel investor, and author — who shared actionable insights into the entrepreneurial mindset, startup challenges, and investing strategies. Attended by over 150 students, the session was highly interactive and enriched with real-world lessons, followed by a vibrant Q&A round. With inspiring participation and impactful learning, the event energized the campus entrepreneurial spirit.`,
    image:"/Session4.jpeg"
  }
];

const SessionPart = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-12 text-white">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-12 mt-5">Sessions</h1>
      {sessions.map((event, index) => (
        <SessionCard
          key={index}
          className="bg-[#121212] border border-green-500/20 rounded-2xl shadow-md p-6 hover:shadow-green-400/10 transition duration-300"
          {...event}
          reverse={index % 2 === 1} // alternate layout
        />
      ))}
    </section>
  );
};

export default SessionPart;
