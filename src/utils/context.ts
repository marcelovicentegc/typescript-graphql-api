import { RedisClient } from "redis";

interface Session extends Express.Session {
  userId: string | undefined;
}

export interface Context {
  req: {
    session: Session;
    redis: RedisClient;
  };
  res: Express.Response & {
    clearCookie: (sid: string) => void;
  };
}
