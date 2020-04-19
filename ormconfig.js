module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "",
  database: "dreamcatcher",
  dropSchema: true,
  synchronize: true,
  logging: true,
  entities: ["src/database/**/*.model.ts"],
  cli: {
    entitiesDir: "src/database/entities"
  }
};
