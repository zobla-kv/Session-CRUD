import { Request, Response } from 'express';
import SessionManager from '../services/SessionManager';
import CookieParser from '../utils/cookieParser';

export default (req: Request, res: Response, next: () => void): void => {
  const sessionId = CookieParser.getCookieFromHeader(req, 'sessionId');

  if (sessionId && SessionManager.validateSession(sessionId)) {
    next(); 
  } else {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Unauthorized' }));
  }
};