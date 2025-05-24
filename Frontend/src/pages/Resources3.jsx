import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/accordion"

const Resources = () => {
  return (
    <div className="w-svw min-h-svh flex flex-col items-center justify-center px-6 bg-black relative">
      <div className='flex w-full justify-start py-4 gap-2'>
        {/* <div className='size-20'>
          <img src='/public/icons/FintechLogo.png' alt='logo'/>
        </div> */}
      <div className=" flex flex-col gap-1">
        <h1 className="text-white text-5xl">
          Fintech Club
        </h1>
        <h1 className="text-white text-xl">
          IIT(ISM) DHANBAD
        </h1>
      </div>
      </div>
      <div className=' flex flex-col w-full items-center justify-center flex-1'>

      
      <div className="w-full max-w-7xl bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Resources</h1>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="week1">
            <AccordionTrigger className="font-medium text-xl hover:no-underline">Python Resources</AccordionTrigger>
            <AccordionContent>
              <div className='flex flex-col w-full  gap-2'>
                <div className='w-full flex  justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60'>
                    1. Introduction to Python
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://www.geeksforgeeks.org/python-programming-language-tutorial/' className='text-sm text-gray-300 underline'>Tutorial</a>
                    <a href='https://pynative.com/python-basic-exercise-for-beginners/' className='text-sm text-gray-300 underline'>Examples</a>

                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="financeResources">
            <AccordionTrigger className="font-medium text-xl hover:no-underline">Finance Resources</AccordionTrigger>
            <AccordionContent>
            <div className='flex flex-col w-full  gap-2'>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60 '>
                    1. Basics of Financial Markets
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%201_Introduction%20to%20Stock%20Markets.pdf' className='text-sm text-gray-300 underline'>Varsity Module 1</a>
                  </div>
                </div>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60 '>
                    2. Technical Analysis
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%202_Technical%20Analysis.pdf' className='text-sm text-gray-300 underline'>Varsity Module 2</a>
                  </div>
                </div>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60 '>
                    3. Fundamental Analysis
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://zerodha-common.s3.ap-south-1.amazonaws.com/Varsity/Modules/Module%203_Fundamental%20Analysis.pdf' className='text-sm text-gray-300 underline'>Varsity Module 3</a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="probabilityandStatistics">
            <AccordionTrigger className="font-medium text-xl hover:no-underline">Probability and Statistics</AccordionTrigger>
            <AccordionContent>
            <div className='flex flex-col w-full  gap-2'>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60'>
                    1. Statistics 
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://www.youtube.com/live/11unm2hmvOQ?si=Utf3g-PHEX6b8osZ' className='text-sm text-gray-300 underline'>Video 1</a>
                    <a href='https://www.youtube.com/live/Ims3L_hfLJU?si=PE1IY47-hyG-fQWL' className='text-sm text-gray-300 underline'>Video 2</a>
                    <a href='https://www.youtube.com/live/y1y1ATTMpaw?si=xE9PORhdTm_N9dZp' className='text-sm text-gray-300 underline'>Video 3</a>


                  </div>
                </div>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60'>
                    2. Probability 
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='text-sm text-gray-300'>*Refer JEE Mains level Probability Questions</div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="practice">
            <AccordionTrigger className="font-medium text-xl hover:no-underline">Practice Test</AccordionTrigger>
            <AccordionContent>
            <div className='flex flex-col w-full  gap-2'>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60'>
                    1. Link for Practice Test
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfhRh81CnCzIag3MJqavykyzC3pdB8X4RVlf6LtCfuTPvxolQ/viewform?usp=sharing' className='text-sm text-gray-300 underline'>Link</a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="additionalResources">
            <AccordionTrigger className="font-medium text-xl hover:no-underline">Other Important Resources</AccordionTrigger>
            <AccordionContent>
            <div className='flex flex-col w-full  gap-2'>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60'>
                    1. Refer this for Python libraries 
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://mlcourse.ai/book/index.html' className='text-sm text-gray-300 underline'>Link</a>
                  </div>
                </div>
                <div className='w-full flex justify-start gap-12 max-sm:flex-col max-sm:gap-2'>
                  <div className='text-lg text-white min-w-60'>
                    2. For Logical Reasoning
                  </div>
                  <div className='flex items-center gap-4'>
                    <a href='https://www.indiabix.com/logical-reasoning/questions-and-answers/#google_vignette' className='text-sm text-gray-300 underline'>Practice</a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      </div>
    </div>
  );
};

export default Resources;
