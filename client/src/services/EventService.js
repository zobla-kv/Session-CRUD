import { BASE_URL } from '../config/config';

export default class EventService {
  static async getAllEvents() {
    const url = '/api/events/getAll';
    const options = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    const response = await fetch(`${BASE_URL}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.events) {
      return data.events;
    }

    return null;
  }


  static async addEvent(eventDetails) {
    const url = '/api/events/add';
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventDetails)
    };
  
    const response = await fetch(`${BASE_URL}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    if (data.eventDetails) {
      return data.eventDetails;
    }

    return null;
  }


  static async deleteEvent(eventDetails) {
    const url = '/api/events/delete';
    const options = {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventDetails)
    };
  
    const response = await fetch(`${BASE_URL}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (data.events) {
      return data.events;
    }

    return null;
  }
}