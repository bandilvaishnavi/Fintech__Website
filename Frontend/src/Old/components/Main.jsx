import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div className='w-full '>
    <div className="flex items-center justify-center lg:gap-72">
      <div className="box-overlay flex flex-col gap-1">
        <h1 data-content="Fintech Club" className="fintech-overlay text-5xl lg:text-8xl">
          Fintech Club
        </h1>
        <h1 data-content="IIT(ISM) DHANBAD" className="dhanbad-overlay text-xl">
          IIT(ISM) DHANBAD
        </h1>
      </div>
      <div>
        <img src='/icons/currency.svg' className='max-sm:hidden'/>
      </div>
    </div>
    </div>
  );
};

export default Main;
