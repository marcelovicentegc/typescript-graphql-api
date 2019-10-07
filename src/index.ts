import { ApolloServer } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as path from "path";
import "reflect-metadata";
import { createConnection, getConnectionOptions } from "typeorm";
import schema from "./schema/schema";

const port = process.env.TCP;

const startServer = async () => {
  const server = new ApolloServer({
    schema,
    playground: {
      endpoint: "/api/playground"
    },
    context: ({ req, res }: any) => ({ req, res })
  });

  await getConnectionOptions()
    .then(async connectionOptions => {
      if (process.env.NODE_ENV === "production") {
        Object.assign(connectionOptions, {
          entities: ["dist/server/database/**/*.model.js"],
          cli: {
            entitiesDir: "dist/server/database/entities"
          }
        });
      }
      await createConnection(connectionOptions)
        .then(connection => {
          console.log("Connected to database: ", connection.isConnected);

          const app = express();
          app.use(bodyParser.json());
          server.applyMiddleware({
            app,
            path: "/api",
            cors: {
              origin: [
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "http://localhost:4000",
                "http://127.0.0.1:4000"
              ],
              credentials: true
            }
          });

          if (process.env.NODE_ENV === "production") {
            app.use(express.static(path.resolve("./dist")));
            app.get(
              "*",
              cors({
                origin: [
                  "http://localhost:3000",
                  "http://127.0.0.1:3000",
                  "http://localhost:4000",
                  "http://127.0.0.1:4000"
                ]
              }),
              (req, res) => {
                res.sendFile(path.resolve("./dist/index.html"));
              }
            );

            app.listen(port ? port : 4000, () => {
              console.log(
                `Server is ready for requests on port ${port ? port : "4000"}`
              );
            });
          }

          if (process.env.NODE_ENV === "development") {
            app.listen(port ? port : 8080, () => {
              console.log(
                `Server is ready for requests on port ${port ? port : "8080"}`
              );
            });
          }
        })
        .catch(async error => {
          console.log("TypeORM createConnection error: ", error);
        });
    })
    .catch(error => {
      console.log("TypeORM getConnectionOptions error: ", error);
    });
};

startServer();
