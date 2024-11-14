import { Event } from "../models/Events";

class EventManager {
  // singleton
  private static instance: EventManager;

  private _events: Map<string, Event[]>;

  constructor() {
    this._events = new Map();
  }

  static getInstance(): any {
    if (!EventManager.instance) {
      EventManager.instance = new EventManager();
    }
    return EventManager.instance;
  }

  // get events in session
  getAllEvents(sessionId: string): Event[] {
    return this._events.get(sessionId) ?? [];
  }
  
  // add event to session
  addEvent(sessionId: string, eventDetails: Event): Event {
    const currentEvents = this._events.get(sessionId) || [];
    const updatedEvents = [...currentEvents, eventDetails];

    this._events.set(sessionId, updatedEvents);
    return eventDetails;
  }

  // delete event from session
  deleteEvent(sessionId: string, event: Event): Event[] {
    const currentEvents = this._events.get(sessionId) || [];

  // Filter out the event by matching properties (you may add a unique ID for better identification)
  const updatedEvents = currentEvents.filter((e) =>
      e.title !== event.title ||
      e.description !== event.description ||
      e.location !== event.location
    );

    this._events.set(sessionId, updatedEvents);

    return updatedEvents;
  }

}


export default EventManager.getInstance();
