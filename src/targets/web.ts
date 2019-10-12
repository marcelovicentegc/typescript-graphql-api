export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type CreateAnimalVariables = {
  species: string;
  favoriteFood: string;
};

export type CreateAnimalMutation = {
  __typename?: "Mutation";

  createAnimal: CreateAnimalCreateAnimal;
};

export type CreateAnimalCreateAnimal = {
  __typename?: "Animal";

  species: string;

  favoriteFood: string;
};

export type UpdateAnimalVariables = {
  id: string;
  species: string;
  favoriteFood: string;
};

export type UpdateAnimalMutation = {
  __typename?: "Mutation";

  updateAnimal: boolean;
};

export type DeleteAnimalVariables = {
  id: string;
};

export type DeleteAnimalMutation = {
  __typename?: "Mutation";

  deleteAnimal: boolean;
};

export type GetAnimalVariables = {
  id: string;
};

export type GetAnimalQuery = {
  __typename?: "Query";

  animal: GetAnimalAnimal;
};

export type GetAnimalAnimal = {
  __typename?: "Animal";

  id: string;

  species: string;

  favoriteFood: string;
};

export type GetAnimalsVariables = {};

export type GetAnimalsQuery = {
  __typename?: "Query";

  animals: GetAnimalsAnimals[];
};

export type GetAnimalsAnimals = {
  __typename?: "Animal";

  id: string;

  species: string;

  favoriteFood: string;
};
