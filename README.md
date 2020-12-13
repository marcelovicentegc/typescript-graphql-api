# 🈚 typescript-graphql-api

[![Build Status](https://dev.azure.com/marcelovicentegc/public-pipes/_apis/build/status/marcelovicentegc.typescript-graphql-api?branchName=master)](https://dev.azure.com/marcelovicentegc/public-pipes/_build/latest?definitionId=4&branchName=master)
[![Node CI](https://github.com/marcelovicentegc/typescript-graphql-api/workflows/Node%20CI/badge.svg)](https://github.com/marcelovicentegc/typescript-graphql-api/workflows/Node%20CI/badge.svg)

## Features

- Express
- Apollo Server
- TypeORM
- GraphQL
- PostgreSQL
- Redis
- Sentry

## Directions

1. Clone this repo: `git clone https://github.com/marcelovicentegc/typescript-graphql-api.git`
2. Change directory: `cd typescript-graphql-api`
3. Install dependencies: `npm i`
4. Create a Postgres database and set your credentials on a `.env` file, similar to `.env.example` (you can start a Postgres db with Docker by running `npm run get:pg` followed by `npm run start:pg`)
5. Create a Redis database and set your credentials on a `.env` file, similar to `.env.example` (you can start Redis with Docker by running `npm run get:redis` followed by `npm run start:redis`)
6. Run the application: `npm start`
7. Navigate to `http://localhost:8080/api`
8. Make sure the app is up and running before generating the client types (`npm run gen`)

## Configuration

| Environment variable | Default value |
| -------------------- | ------------- |
| SESSION_SECRET       | random uuid   |
| PORT                 | 8080          |
| APOLLO_ENDPOINT      | /api          |
| DB_HOST              | localhost     |
| DB_NAME              | postgres      |
| DB_USERNAME          | postgres      |
| DB_PASSWORD          | postgres      |
| REDIS_HOST           | localhost     |
| REDIS_PORT           | 6379          |
| REDIS_PASSWORD       | undefined     |
| SENTRY_DNS           | undefined     |
| ENVIRONMENT          | local         |

## Demo

<img src="./assets/typescript-graphql-api.gif" />
