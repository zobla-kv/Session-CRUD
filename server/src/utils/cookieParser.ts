import { Request } from 'express';

export default class CookieParser {

  static getCookieFromHeader(req: Request, cookie: string): string | undefined {
    const cookies = req.headers.cookie?.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=').map(part => part.trim());
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    return cookies ? cookies[cookie] : undefined;
  }
}