# 🈚 typescript-graphql-api

[![Build Status](https://dev.azure.com/marcelovicentegc/public-pipes/_apis/build/status/marcelovicentegc.typescript-graphql-api?branchName=master)](https://dev.azure.com/marcelovicentegc/public-pipes/_build/latest?definitionId=4&branchName=master)

## Features

- HTTP server:

  1. **Express**

- GraphQL server:

  2. **Apollo Server**

- Database:

  3. **PostgreSQL**

- Object-relational mapping framework:

  4. **TypeORM**

- Data query and manipulation framework:

  5. **GraphQL**

## Demo

<img src="./assets/typescript-graphql-api.gif" />

## Directions

1. Clone this repo: `git clone https://github.com/marcelovicentegc/typescript-graphql-api.git`
2. Change directory: `cd typescript-graphql-api`
3. Install dependencies: `yarn install` or `npm install`
4. Create a Postgres database and set your credentials on a `ormconfig.json` file, similar to `ormconfig.example.json`
5. Run the application: `yarn start` or `npm run start`
6. Head to `http://localhost:8080/api`
7. Make sure the app is up and running before generating the client types (`yarn gen` or `npm run gen`)
