import { Router, Request, Response} from 'express';
const EventsRouter = Router();
import EventManager from '../services/EventManager';
import CookieParser from '../utils/cookieParser';

EventsRouter.get('/getAll', (req: Request, res: Response, next: () => void) => {
  const sessionId = CookieParser.getCookieFromHeader(req, 'sessionId');
  const events = EventManager.getAllEvents(sessionId);
  res.status(200).json({ events });
});

EventsRouter.post('/add', (req: Request, res: Response, next: () => void) => {
  const sessionId = CookieParser.getCookieFromHeader(req, 'sessionId');
  const eventDetails = req.body;
  const event = EventManager.addEvent(sessionId, eventDetails);
  res.status(200).json({ eventDetails });
});

EventsRouter.delete('/delete', (req: Request, res: Response, next: () => void) => {
  const sessionId = CookieParser.getCookieFromHeader(req, 'sessionId');
  const eventDetails = req.body;
  const events = EventManager.deleteEvent(sessionId, eventDetails);
  res.status(200).json({ events });
});

export default EventsRouter;