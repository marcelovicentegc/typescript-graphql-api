import gql from "graphql-tag";

export const createAnimal = gql`
  mutation CreateAnimal($species: String!, $favoriteFood: String!) {
    createAnimal(species: $species, favoriteFood: $favoriteFood) {
      species
      favoriteFood
    }
  }
`;

export const updateAnimal = gql`
  mutation UpdateAnimal($id: ID!, $species: String!, $favoriteFood: String!) {
    updateAnimal(id: $id, species: $species, favoriteFood: $favoriteFood)
  }
`;

export const deleteAnimal = gql`
  mutation DeleteAnimal($id: ID!) {
    deleteAnimal(id: $id)
  }
`;
