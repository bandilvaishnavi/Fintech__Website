import React from "react";

const SessionCard = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center md:items-stretch gap-6 my-10 bg-[#121212] border border-green-500/30 rounded-2xl shadow-md p-6 hover:shadow-green-400/10 hover:scale-[1.02] transition-all duration-300 ease-in-out`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
           className="h-64 w-full object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 text-gray-200 flex flex-col justify-between px-2 md:px-4">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-green-400">{title}</h2>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;



