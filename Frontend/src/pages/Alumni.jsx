import React from "react";
import {FaLinkedin, FaEnvelope} from 'react-icons/fa'
const AlumniSection=()=> {
  return (
    <div className="bg-black text-white py-10 px-5 mt-8">
      <h2 className="text-4xl font-bold text-center text-green-500 mb-10">FICs and Coordinators</h2>

      <p className="text-center text-3xl font-bold mb-6">FICs</p>

<div className="flex flex-wrap justify-center gap-8 mb-12">

<div className="bg-gray-900 p-6 rounded-lg text-center w-72 shadow-md">
<img
  src="/GN_Sir.jpg"
  alt="fic"
  className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
/>
<h3 className="text-xl font-bold text-white">Prof GN</h3>

<div className="flex justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/YOUR-LINK"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
  </a>
  <a href="mailto:example@gmail.com">
    <FaEnvelope className="text-2xl text-gray-300 hover:text-red-500" />
  </a>
</div>
</div>

<div className="bg-gray-900 p-6 rounded-lg text-center w-72 shadow-md">
<img
  src="/Esha_Saha.jpg"
  alt="fic"
  className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
/>
<h3 className="text-xl font-bold text-white">Prof Esha Saha</h3>

 <div className="flex justify-center gap-4">
  <a
    href="https://www.linkedin.com/in/YOUR-LINK"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
  </a>
  <a href="mailto:example@gmail.com">
    <FaEnvelope className="text-2xl text-gray-300 hover:text-red-500" />
  </a>
 </div>
</div>
</div>     
      {/* Coordinators Row */}
      <p className="text-center text-3xl font-bold mb-6">COORDINATORS</p>

    <div className="flex flex-wrap justify-center gap-8 mb-12">

    <div className="bg-gray-900 p-6 rounded-lg text-center w-72 shadow-md">
    <img
      src="/Pranav_Jha.jpg"
      alt="Coordinator"
      className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
    />
    <h3 className="text-xl font-bold text-white">Pranav Jha</h3>
    <p className="text-gray-300 mb-3">Coordinator 2024-2025</p>
    <div className="flex justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/YOUR-LINK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
      </a>
      <a href="mailto:example@gmail.com">
        <FaEnvelope className="text-2xl text-gray-300 hover:text-red-500" />
      </a>
    </div>
  </div>

  <div className="bg-gray-900 p-6 rounded-lg text-center w-72 shadow-md">
    <img
      src="/Rohan_Kumar.jpg"
      alt="Coordinator"
      className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
    />
    <h3 className="text-xl font-bold text-white">Rohan Kumar</h3>
    <p className="text-gray-300 mb-3">Co-Coordinator 2024-2025</p>
     <div className="flex justify-center gap-4">
      <a
        href="https://www.linkedin.com/in/YOUR-LINK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
      </a>
      <a href="mailto:example@gmail.com">
        <FaEnvelope className="text-2xl text-gray-300 hover:text-red-500" />
      </a>
     </div>
    </div>
  </div>
    </div>
  );
}

export default AlumniSection;