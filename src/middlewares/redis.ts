import Redis from "redis";
import express, { Application } from "express";
import { isProduction, redisHost, redisPassword, redisPort } from "../config";

export function setupRedis(app: Application) {
  const redisClient = Redis.createClient({
    port: redisPort,
    host: redisHost,
    password: redisPassword,
    tls: isProduction ?? {},
  });

  redisClient.on("error", console.error);

  const runRedisHealthcheck = () => {
    console.log("Redis is ready");

    redisClient.set("ht", "HELLO", (_, reply) => {
      console.log(`\tRedis "set" healthcheck: ${reply?.toString()}`);

      redisClient.get("ht", (_, reply) => {
        console.log(`\tRedis "get" healthcheck: ${reply?.toString()}`);
      });
    });
  };

  redisClient.on("connect", runRedisHealthcheck);

  const redisMiddleware = (
    req: express.Request,
    _res: express.Response,
    next: express.NextFunction
  ) => {
    req.redis = redisClient;
    next();
  };

  app.use(redisMiddleware);

  return redisClient;
}
