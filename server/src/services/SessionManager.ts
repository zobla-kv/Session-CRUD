import { Session, SessionData } from "../models/Session";

class SessionManager {
  // singleton
  private static instance: SessionManager
  private _sessions: Map<string, Session>;

  constructor() {
    this._sessions = new Map();
  }

  static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  // generate random id between 1 and 100
  generateSessionId(): string {
    return Math.floor(Math.random() * 100) + 1 + '';
  };

  // create session
  createSession(): string {
    const sessionId = this.generateSessionId();
    const data = { events: 1 };
    this._sessions.set(sessionId, { sessionId, data });
    return sessionId;
  }

  // get session by id
  getSession(id: string): Session | null {
    return this._sessions.get(id) || null;
  }

   // remove session by id
   removeSession(id: string): boolean {
    return this._sessions.delete(id);
  }

  // validate session
  validateSession(id: string): boolean {
    return this._sessions.has(id);
  }

}

export default SessionManager.getInstance();
