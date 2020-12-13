export const apolloEndpoint = process.env.APOLLO_ENDPOINT || "/api";

export const sessionSecret =
  process.env.SESSION_SECRET || "807db130-1217-453f-906d-7918301a480d";

export const port = process.env.PORT || 8080;

export const isProduction = process.env.NODE_ENV === "production";

export const redisPort = Number(process.env.REDIS_PORT) || 6379;

export const redisHost = process.env.REDIS_HOST || "localhost";

export const redisPassword = process.env.REDIS_PASSWORD || undefined;

export const environment = process.env.ENVIRONMENT || "local";

export const clientUrl = (() => {
  if (isProduction) {
    if (environment === "staging") {
      return "https://staging.example.com";
    }

    return "https://example.com";
  }

  return "http://localhost:3000";
})();

export const corsEnabled = isProduction
  ? [clientUrl]
  : [
      "http://localhost:3000", // client
      "http://127.0.0.1:3000", // client
      "http://localhost:8080", // same-origin
      "http://127.0.0.1:8080", // same-origin
    ];

export const sentryDns = process.env.SENTRY_DNS;
