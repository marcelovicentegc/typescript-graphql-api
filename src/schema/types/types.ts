import gql from "graphql-tag";

export const types = gql`
  type Animal {
    id: ID!
    species: String!
    favoriteFood: String!
  }
`;
