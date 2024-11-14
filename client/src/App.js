import React, { useState, useEffect } from 'react';
import EventList from './components/EventList/EventList';
import Form from './components/Form/Form';

import AuthService from './services/AuthService';
import EventService from './services/EventService';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    AuthService.login().then((id) => {
      setSessionId(id);
      // fetch immediately after login
      fetchItems();
    });
  }, [setSessionId]);
  

  const fetchItems = async () => {
    try {
      const allEvents = await EventService.getAllEvents();
      setEvents(allEvents);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleAddEvent = async (formData) => {
    try {
      const newEvent = await EventService.addEvent(formData);
      setEvents((prevItems) => [...prevItems, newEvent]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleDeleteEvent = async (eventDetails) => {
    try {
      const events = await EventService.deleteEvent(eventDetails);
      setEvents(events);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <h1 className='text-center'>Events Application</h1>
      <div className='flex container'>
        <div className='form-wrapper flex-center'>
          <Form onSubmit={handleAddEvent} />
        </div>
        <div className='events-wrapper text-center'>
          <EventList events={events} onDelete={handleDeleteEvent}/>
        </div>
      </div>
    </div>
  );
};

export default App;