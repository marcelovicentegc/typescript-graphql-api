import gql from "graphql-tag";

export const queries = gql`
  type Query {
    animal(id: ID!): Animal!
    animals: [Animal!]!
  }
`;
