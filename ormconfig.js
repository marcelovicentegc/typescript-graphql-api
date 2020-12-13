
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, NODE_ENV } = process.env;

const DEV_MODE = NODE_ENV === "development";

module.exports = {
  type: "postgres",
  host: DB_HOST || "localhost",
  port: DB_PORT || 5432,
  username: DB_USERNAME || "postgres",
  password: DB_PASSWORD || "postgres",
  database: DB_NAME || "postgres",
  dropSchema: DEV_MODE,
  synchronize: DEV_MODE,
  logging: DEV_MODE,
  entities: ["src/database/**/*.model.ts"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/database/entities",
    migrationsDir: "src/database/migrations"
  },
};