import { makeExecutableSchema } from "graphql-tools";
import { animals } from "./resolvers";
import { types, queries, mutations } from "./typeDefs";

export const schema = makeExecutableSchema({
  typeDefs: [types, queries, mutations],
  resolvers: [animals],
});
