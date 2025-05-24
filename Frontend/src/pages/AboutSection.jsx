import React from "react";
import { motion } from "framer-motion";

// Sample data
const ficMembers = [
  {
    name: "Prof. GN Sir",
    photo: "/GN_Sir.jpg",
    role: "Faculty Advisor",
  },
  {
    name: "Prof. Esha Saha Ma'am",
    photo: "/Esha_Saha.jpg",
    role: "Faculty Advisor",
  },
];

const coordinators = [
  {
    name: "Pranav Jha",
    photo: "/Pranav_Jha.jpg",
    role: "Coordinator",
    branch: "Engineering Physics",
    linkedin: "https://www.linkedin.com/in/pranav-jha-522789255?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD7w66oBA0tS7zEXo8fE60fmloZWj72LwGA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhIWDyyHpTjq73eiUyRjS7g%3D%3D",
  },
  {
    name: "Rohan Kumar",
    photo: "/Rohan_Kumar.jpg",
    role: "Co-Coordinator",
    branch: "Mining Machinery Engineering",
    linkedin: "https://www.linkedin.com/in/rohan-kumar-2ab212242?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADwwGCMBWVNI24muAOEKmb-guofZ-0BmNd8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B99hK7G10SP29bmiBj7nkvg%3D%3D",
  },
];

const teamMembers = [
  {
    name: "Kchitiz Raj",
    photo: "/",
    branch: "Mining Engineering",
    linkedin: "https://www.linkedin.com/in/kchitiz-raj-869681223?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADgpi5EBugdz_5zfz1TTKs_J1y_hUJ-NZFg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B3U7DnxVBRqCrNstkhOv0OA%3D%3D",
  },
  {
    name: "Mihir Kotadiya",
    photo: "/Mihir.jpg",
    branch: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/mihir-kotadiya-177147267?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEFWsCsBNQ4ARaP209g8BVQYajAJKhjsd9o&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bv0GOtRlTQCG6f483eoUfWw%3D%3D",
  },
  {
    name: "Karan Negi",
    photo: "/",
    branch: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/karan-negi-744b54251?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD5IyCQBH6uK26vTJbh8zKkIJQ0XA02w1TM&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B6rdLvEHASXi377y%2B2NBRaA%3D%3D",
  },
  {
    name: "Hrushikesh Peddi",
    photo: "/Hrushikesh.jpg",
    branch: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/hrushikesh-peddi?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD7cc9cB-0_gA_r1kba-vtFZl4j2vnQ_1dA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B6k8i0IuhQyKMqbjxit590w%3D%3D",
  },
  {
    name: "Pranjali Singh",
    photo: "/Pranjali.jpg",
    branch: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/pranjali-singh-8b4564214?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADYwAggBOIlQlhjhkc0Jph0jOXYB-tK04I0&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BQIbyaxZxTIS%2Bpl5ZWp5bIA%3D%3D",
  },
  {
    name: "Shivprasad Nirmale",
    photo: "/",
    branch: "Mathematics and Computing",
    linkedin: "https://www.linkedin.com/in/shivprasad-nirmale-562096255?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD7WlJoBcQbg7yPTP2dyFTyiRdcuW-QusD4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BdNd4tjbMQEamh56m4EpLUg%3D%3D",
  },
  {
    name: "Sarvagya Kaushik",
    photo: "/",
    branch: "Engineering Physics",
    linkedin: "https://www.linkedin.com/in/sarvagya-kaushik-992496255?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD7lxv4BiHtnLAm-BrcHjbvIVIX29lkU7YA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bruk0IeAgQd2qGJ8B8kTtlg%3D%3D",
  },
  {
    name: "Shambhavi Kumar",
    photo: "/Shambhavi.jpg",
    branch: "Mining Engineering",
    linkedin: "https://www.linkedin.com/in/shambhavi-kumar-72435325a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD_EcUwBsOnpK9w5gWvt5wlPEyK4jdcZqUk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Ben5rrjkBRVO9eEZ2PwQrEA%3D%3D",
  },
  {
    name: "Sahebdeep Singh Kukreja",
    photo: "/",
    branch: "Mathematics and Computing",
    linkedin: "https://www.linkedin.com/in/sahebdeep-singh-kukreja-2b96a2212?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADXZ4S0BRGPtLcukYM1RGhdUYGW2BemnWCM&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BeWlLAijgRIOniEh8JFna8A%3D%3D",
  },
  {
    name: "Srushti Ratnaparkhi",
    photo: "/Srushti.jpg",
    branch: "Environmental Engineering",
    linkedin: "https://www.linkedin.com/in/srushti-ratnaparkhi?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD7lOBQBEUSbzqVhFv-4hlDs2uA66EE5UZQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BacMk8fSSTEOVSsdDnSV7aw%3D%3D",
  },
  {
    name: "Vaishnavi Bandil",
    photo: "/Vaishnavi.jpg",
    branch: "Mining Machinery Engineering",
    linkedin: "https://www.linkedin.com/in/vaishnavi-bandil?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADKfdD4Bkm08pos0hOPsC_SE5o_OzvBGE64&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BRBp0yuf1Tv65L2enQpk4Nw%3D%3D",
  }
];

const Card = ({ member }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#1c1c1c] rounded-xl p-5 text-center shadow-md border border-green-500/30 hover:shadow-green-400/20 transition duration-300"
  >
    <img
      src={member.photo}
      alt={member.name}
      className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-green-500 hover:border-green-300"
    />
    <h3 className="text-xl font-semibold">{member.name}</h3>
    {member.role && <p className="text-sm text-gray-400">{member.role}</p>}
    {member.branch && <p className="text-sm text-gray-400">{member.branch}</p>}
    {member.linkedin && (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-green-400 hover:text-green-300"
      >
        LinkedIn →
      </a>
    )}
  </motion.div>
);

const SectionHeading = ({ text }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-green-400 text-center mb-8 mt-16"
  >
    {text}
  </motion.h2>
);

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 py-12">
      {/* About Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-green-400 mb-6 mt-8">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
        The FinTech Club of IIT(ISM) Dhanbad is a student-driven initiative dedicated to exploring the applications of quantitative methods and machine learning in modern finance. Our primary focus lies in bridging theoretical concepts with practical tools used in quantitative analysis, algorithmic trading, risk modeling, and financial forecasting.

Through workshops, technical sessions, and project-based learning we strive to create a collaborative environment that brings together students with interests in finance, data science, and applied mathematics. The club regularly organizes knowledge-sharing sessions, speaker events, and competitions that provide exposure to real-world problems and industry practices. 
        </p>
      </motion.div>

      {/* FIC */}
      <SectionHeading text="Faculty In-Charge" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ficMembers.map((member, idx) => (
          <Card key={idx} member={member} />
        ))}
      </div>

      {/* Coordinators */}
      <SectionHeading text="Coordinators" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {coordinators.map((member, idx) => (
          <Card key={idx} member={member} />
        ))}
      </div>

      {/* Team Members */}
      <SectionHeading text="Team Members" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <Card key={idx} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;