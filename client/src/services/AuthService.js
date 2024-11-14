import { BASE_URL } from '../config/config';

export default class AuthService {

  static async login() {
    const url = '/api/auth/login';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    try {
      const response = await fetch(`${BASE_URL}${url}`, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const sessionId = data.sessionId;
      if (sessionId) {
        document.cookie = `sessionId=${sessionId}`;
      }
  
      return data;
      
    } catch (error) {
      throw error;
    }
  }
}