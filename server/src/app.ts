import http from 'http';
import express from 'express';
import AppRouter from './api/index';
import AppConfig from './config/config';
import cors from './middleware/cors';

const app = express();

// api handlers
app.use('/api', cors, express.json(), AppRouter);

// https server
http.createServer(app).listen(AppConfig.PORT, () => {
  console.log(`server started on port ${AppConfig.PORT}`);
})
