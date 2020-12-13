FROM node:12 AS build
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci --dev
ADD . /app/
RUN npx tsc

FROM node:12
ENV NODE_ENV production
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm ci --prod
COPY --from=build /app/build/ /app/
COPY ormconfig.js /app/
CMD ["node", "-r", "source-map-support/register", "/app/index.js"]