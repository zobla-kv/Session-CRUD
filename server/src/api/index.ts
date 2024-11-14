import { Router } from 'express';

const AppRouter = Router();
import AuthRouter from './auth';
import EventsRouter from './events';

import auth from '../middleware/auth';

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/events', auth, EventsRouter);

export default AppRouter;

