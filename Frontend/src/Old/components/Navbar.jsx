import React from 'react';
import { Link } from 'react-router-dom';

const items = ['Events', 'Resources', 'Blogs', 'Alumni','Gallery'];
const Navbar = () => {
  return (
    <div className='sticky z-10 mb-20  top-8 w-full px-2 flex justify-center items-center'>
    <div className=" w-full lg:w-[50%]  rounded-full py-3 px-4 flex justify-between shadow-lg ring-1 ring-slate-400">
      {items.map((el, index) => {
        const route=el.toLowerCase();
        return(
        <Link to={`/${route}`}>
        <div key={index} className="relative group">
          <h1 className="font-medium text-white hover:cursor-pointer text-base lg:text-lg leading-none rounded-full text-center">
            {el}
          </h1>
          <span
            className="absolute bottom-0  w-0 h-1 bg-green-500 bg-opacity-100 transition-all duration-300 ease-in-out transform  group-hover:w-full"
            style={{
              maskImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%230087ca' stroke-width='2' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
              
            }}
          />
        </div>
        </Link>
)})}
    </div>
    </div>
  );
};

export default Navbar;
