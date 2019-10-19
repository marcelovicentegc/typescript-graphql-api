export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Animal = {
   __typename?: 'Animal',
  id: Scalars['ID'],
  species: Scalars['String'],
  favoriteFood: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createAnimal: Animal,
  updateAnimal: Scalars['Boolean'],
  deleteAnimal: Scalars['Boolean'],
};


export type MutationCreateAnimalArgs = {
  species: Scalars['String'],
  favoriteFood: Scalars['String']
};


export type MutationUpdateAnimalArgs = {
  id: Scalars['ID'],
  species: Scalars['String'],
  favoriteFood: Scalars['String']
};


export type MutationDeleteAnimalArgs = {
  id: Scalars['ID']
};

export type Query = {
   __typename?: 'Query',
  animal: Animal,
  animals: Array<Animal>,
};


export type QueryAnimalArgs = {
  id: Scalars['ID']
};
