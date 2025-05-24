import React, { useEffect, useState } from 'react';
import RegisterEventForm from '../Old/components/EventsPage/RegisterEventForm';
import Card from '../Old/components/EventsPage/RegisterEventCard';
import axios from '../utils/axios'; 

const RegisterEvents = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    prizeMoney: '',
    type: ''
  });

  const [events, setEvents] = useState([]); 
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/event/getAll');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/event/add', 
        {
          title:formData.name,
          description:formData.description,
          prize:formData.prizeMoney,
          type:formData.type
        }
      );
      const newEvent = response.data;

      setEvents((prevEvents) => [...prevEvents, newEvent]);

      setFormData({
        name: '',
        description: '',
        prizeMoney: '',
        type: ''
      });

    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.post(`/event/delete/${id}`);
      setEvents(events.filter((event) => event._id !== id));  
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  return (
    <div className="bg-black min-w-screen min-h-dvh p-6">
      <div className="w-full flex flex-col gap-6">
        <div className="flex w-full flex-col md:flex-row justify-between gap-4 items-center">
          <div className="flex flex-1 flex-col items-center justify-center">
            <RegisterEventForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit} 
            />
          </div>
          <div>
            <Card
              title={formData.name}
              description={formData.description}
              prize={formData.prizeMoney}
              onDelete={handleDelete}
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto flex gap-5 scrollbar-hide">
          {events.map((event) => (
            <Card
              key={event._id} 
              title={event.title}
              description={event.description}
              prize={event.prize}
              id={event._id}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisterEvents;
