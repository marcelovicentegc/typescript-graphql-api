import "reflect-metadata";
import bodyParser from "body-parser";
import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import path from "path";
import { ApolloServer } from "apollo-server-express";
import { createConnection, getConnectionOptions } from "typeorm";
import { schema } from "./schema";
import {
  corsEnabled,
  apolloEndpoint,
  sessionSecret,
  port,
  isProduction,
  environment,
} from "./config";
import { Context } from "./utils/context";
import { setupSentry, setupRedis } from "./middlewares";

const startServer = async () => {
  let retries = 5;
  while (retries) {
    const connectionOptions = await getConnectionOptions();
    if (isProduction) {
      console.log(
        "============================ PRODUCTION MODE ============================"
      );
      Object.assign(connectionOptions, {
        entities: ["database/**/*.model.js"],
        migrations: ["database/migrations/*.js"],
        cli: {
          migrationsDir: "database/migrations",
          entitiesDir: "database/entities",
        },
        dropSchema: false,
      });
    }

    try {
      await createConnection(connectionOptions).then(() => {
        console.log("Connected to database");
      });

      if (!isProduction) {
        console.log(
          "============================ DEVELOPMENT MODE ON ============================"
        );
      }

      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`${retries} retries left`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }

  const server = new ApolloServer({
    schema,
    introspection: environment !== "production",
    playground: {
      endpoint: apolloEndpoint,
      // See https://github.com/graphql/graphql-playground/issues/748#issuecomment-412524510
      // if you have trouble on sending cookies from the playground in the future.
      settings: {
        "request.credentials": "include",
      },
    },
    context: ({ req, res }: Context) => ({ req, res }),
  });

  const app = express();

  if (isProduction) {
    setupSentry(app);
  }

  const redisClient = setupRedis(app);

  const RedisStore = connectRedis(session);

  app.use(bodyParser.json());

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      proxy: isProduction,
      cookie: {
        httpOnly: !isProduction,
        secure: isProduction,
        domain: isProduction ? ".dreamio.app" : undefined,
      },
    })
  );

  server.applyMiddleware({
    app: app as any,
    path: apolloEndpoint,
    cors: {
      origin: [...corsEnabled],
      credentials: true,
    },
  });

  if (isProduction) {
    app.use(express.static(path.resolve("./dist")));

    app.get("/sentry-ht", (_, __) => {
      throw new Error("Sentry is OK");
    });
  }

  app.get("/", (_, res) => {
    // Health check
    res.send("OK");
  });

  app.listen(port, () => {
    console.log(`Server is ready for requests on port ${port}`);
  });
};

startServer();
