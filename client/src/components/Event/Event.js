import React from 'react';
import './Event.css'

const Event = ({ event, onDelete }) => {
  return (
    <div className='event-wrapper'>
      <p>title: {event.title}</p>
      <p>date: {event.date}</p>
      <p>description: {event.description}</p>
      <p>location: {event.location}</p>
      <button onClick={() => onDelete(event)}>Delete</button>
    </div>
  );
};

export default Event;