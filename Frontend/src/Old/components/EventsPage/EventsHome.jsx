import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card';
import axios from "../../utils/axios"
const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(()=>{
        const fetchEvents = async () => {
            try {
              const response = await axios.get('/event/getAll');
              const filteredEvents = response.data.filter(event => event.type === 'Past');
              setEvents(filteredEvents);
            } catch (err) {
              console.error(err);
            }
          };
      
          fetchEvents();
    },[])
   
    

  return (
    <div className='flex flex-col gap-6 py-16'>
            <div className='h-[1.56rem] flex w-full items-center justify-between'>

          <div className="text-xl leading-[140%] font-medium text-[#e2f164]">
            Past Events
          <div className="w-12 h-[2px] bg-[#e2f164]"> </div>
          </div>
          <Link to={'/events'} className="text-sm leading-[140%] font-medium text-[#e2f164]">
            See more
            
          </Link>
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

    </div>
  )
}
export default Events;