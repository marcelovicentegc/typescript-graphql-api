import gql from "graphql-tag";

export const getAnimal = gql`
  query GetAnimal($id: ID!) {
    animal(id: $id) {
      id
      species
      favoriteFood
    }
  }
`;

export const getAnimals = gql`
  query GetAnimals {
    animals {
      id
      species
      favoriteFood
    }
  }
`;
