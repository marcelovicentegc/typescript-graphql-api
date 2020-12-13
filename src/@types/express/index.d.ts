declare namespace Express {
  export interface Request {
    redis: import("redis").RedisClient;
  }
}
