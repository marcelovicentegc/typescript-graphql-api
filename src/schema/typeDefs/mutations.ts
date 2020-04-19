import gql from "graphql-tag";

export const mutations = gql`
  type Mutation {
    createAnimal(species: String!, favoriteFood: String!): Animal!
    updateAnimal(id: ID!, species: String!, favoriteFood: String!): Boolean!
    deleteAnimal(id: ID!): Boolean!
  }
`;
