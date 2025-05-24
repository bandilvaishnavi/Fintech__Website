import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from "../../utils/axios"
const Cards = ({text}) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/event/getAll');
        const filteredEvents = response.data.filter(event => event.type === text);
        setEvents(filteredEvents);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, [text]);
  return (
    <>
   {events.length>0&& <div className='flex flex-col gap-6 py-16'>
        <div className="h-[1.56rem] flex items-center">
        <div>
          <div className="text-xl leading-[140%] font-medium text-[#e2f164]">
            {text}
          </div>
          <div className="w-12 h-[2px] bg-[#e2f164]"> </div>
        </div>
      </div>
      <div className='w-full overflow-x-auto flex gap-5 scrollbar-hide'>
     { events.map(event => (
            <Card
              key={event._id}
              title={event.title}
              description={event.description}
              prize={event.prize}
              id={event._id}
            />
          ))
        }
      </div>

    </div>}
  </>
  )
}



export default Cards