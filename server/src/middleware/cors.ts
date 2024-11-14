import { IncomingMessage, ServerResponse } from 'http';

export default function cors(req: IncomingMessage, res: ServerResponse, next: () => void) {
  const origin = req.headers['origin'];

  if (origin && origin.includes('localhost:3000')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'Content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    if(req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }
  }
  next();
};
