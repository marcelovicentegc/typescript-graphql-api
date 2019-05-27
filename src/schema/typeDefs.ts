import gql from "graphql-tag";

const typeDefs = gql`
  type Animal {
    id: ID!
    species: String!
    favoriteFood: String!
  }

  type Query {
    animal(id: ID!): Animal!
    animals: [Animal!]!
  }

  type Mutation {
    createAnimal(species: String!, favoriteFood: String!): Animal!
    updateAnimal(id: ID!, species: String!, favoriteFood: String!): Boolean!
    deleteAnimal(id: ID!): Boolean!
  }
`;

export default typeDefs;
