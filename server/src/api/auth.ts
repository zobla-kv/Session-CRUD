import { Router, Request, Response } from 'express';
const AuthRouter = Router();

import SessionManager from '../services/SessionManager';

AuthRouter.get('/login', (req: Request, res: Response, next: () => void) => {
  const sessionId = SessionManager.createSession();
  res.status(200).json({ sessionId });
});

export default AuthRouter;