export interface Session {
  sessionId: string;
  data: SessionData
}

export interface SessionData {
  events: any // TODO: update
}