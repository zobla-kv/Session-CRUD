import React from 'react';
import Event from '../Event/Event';

const EventList = ({ events, onDelete }) => {
  return (
    <div>
      {events.length > 0 ? (
        events.map((item) => <Event key={item.title} event={item} onDelete={onDelete}/>)
      ) : (
        <p>No events found</p>
      )}
    </div>
  );
};

export default EventList;