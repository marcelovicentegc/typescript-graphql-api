import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  __typename?: 'Animal';
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnimal: Animal;
  updateAnimal: Scalars['Boolean'];
  deleteAnimal: Scalars['Boolean'];
};


export type MutationCreateAnimalArgs = {
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};


export type MutationUpdateAnimalArgs = {
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
};


export type MutationDeleteAnimalArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  animal?: Maybe<Animal>;
  animals: Array<Maybe<Animal>>;
};


export type QueryAnimalArgs = {
  id: Scalars['ID'];
};

export type CreateAnimalMutationVariables = Exact<{
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
}>;


export type CreateAnimalMutation = (
  { __typename?: 'Mutation' }
  & { createAnimal: (
    { __typename?: 'Animal' }
    & Pick<Animal, 'species' | 'favoriteFood'>
  ) }
);

export type UpdateAnimalMutationVariables = Exact<{
  id: Scalars['ID'];
  species: Scalars['String'];
  favoriteFood: Scalars['String'];
}>;


export type UpdateAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateAnimal'>
);

export type DeleteAnimalMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAnimalMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteAnimal'>
);

export type GetAnimalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAnimalQuery = (
  { __typename?: 'Query' }
  & { animal?: Maybe<(
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'species' | 'favoriteFood'>
  )> }
);

export type GetAnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnimalsQuery = (
  { __typename?: 'Query' }
  & { animals: Array<Maybe<(
    { __typename?: 'Animal' }
    & Pick<Animal, 'id' | 'species' | 'favoriteFood'>
  )>> }
);


export const CreateAnimalDocument = gql`
    mutation CreateAnimal($species: String!, $favoriteFood: String!) {
  createAnimal(species: $species, favoriteFood: $favoriteFood) {
    species
    favoriteFood
  }
}
    `;
export type CreateAnimalMutationFn = ApolloReactCommon.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>;
export type CreateAnimalProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateAnimalMutation, CreateAnimalMutationVariables>
    } & TChildProps;
export function withCreateAnimal<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateAnimalMutation,
  CreateAnimalMutationVariables,
  CreateAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateAnimalMutation, CreateAnimalMutationVariables, CreateAnimalProps<TChildProps, TDataName>>(CreateAnimalDocument, {
      alias: 'createAnimal',
      ...operationOptions
    });
};
export type CreateAnimalMutationResult = ApolloReactCommon.MutationResult<CreateAnimalMutation>;
export type CreateAnimalMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAnimalMutation, CreateAnimalMutationVariables>;
export const UpdateAnimalDocument = gql`
    mutation UpdateAnimal($id: ID!, $species: String!, $favoriteFood: String!) {
  updateAnimal(id: $id, species: $species, favoriteFood: $favoriteFood)
}
    `;
export type UpdateAnimalMutationFn = ApolloReactCommon.MutationFunction<UpdateAnimalMutation, UpdateAnimalMutationVariables>;
export type UpdateAnimalProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateAnimalMutation, UpdateAnimalMutationVariables>
    } & TChildProps;
export function withUpdateAnimal<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateAnimalMutation,
  UpdateAnimalMutationVariables,
  UpdateAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateAnimalMutation, UpdateAnimalMutationVariables, UpdateAnimalProps<TChildProps, TDataName>>(UpdateAnimalDocument, {
      alias: 'updateAnimal',
      ...operationOptions
    });
};
export type UpdateAnimalMutationResult = ApolloReactCommon.MutationResult<UpdateAnimalMutation>;
export type UpdateAnimalMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAnimalMutation, UpdateAnimalMutationVariables>;
export const DeleteAnimalDocument = gql`
    mutation DeleteAnimal($id: ID!) {
  deleteAnimal(id: $id)
}
    `;
export type DeleteAnimalMutationFn = ApolloReactCommon.MutationFunction<DeleteAnimalMutation, DeleteAnimalMutationVariables>;
export type DeleteAnimalProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteAnimalMutation, DeleteAnimalMutationVariables>
    } & TChildProps;
export function withDeleteAnimal<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteAnimalMutation,
  DeleteAnimalMutationVariables,
  DeleteAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteAnimalMutation, DeleteAnimalMutationVariables, DeleteAnimalProps<TChildProps, TDataName>>(DeleteAnimalDocument, {
      alias: 'deleteAnimal',
      ...operationOptions
    });
};
export type DeleteAnimalMutationResult = ApolloReactCommon.MutationResult<DeleteAnimalMutation>;
export type DeleteAnimalMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAnimalMutation, DeleteAnimalMutationVariables>;
export const GetAnimalDocument = gql`
    query GetAnimal($id: ID!) {
  animal(id: $id) {
    id
    species
    favoriteFood
  }
}
    `;
export type GetAnimalProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAnimalQuery, GetAnimalQueryVariables>
    } & TChildProps;
export function withGetAnimal<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAnimalQuery,
  GetAnimalQueryVariables,
  GetAnimalProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAnimalQuery, GetAnimalQueryVariables, GetAnimalProps<TChildProps, TDataName>>(GetAnimalDocument, {
      alias: 'getAnimal',
      ...operationOptions
    });
};
export type GetAnimalQueryResult = ApolloReactCommon.QueryResult<GetAnimalQuery, GetAnimalQueryVariables>;
export const GetAnimalsDocument = gql`
    query GetAnimals {
  animals {
    id
    species
    favoriteFood
  }
}
    `;
export type GetAnimalsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAnimalsQuery, GetAnimalsQueryVariables>
    } & TChildProps;
export function withGetAnimals<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAnimalsQuery,
  GetAnimalsQueryVariables,
  GetAnimalsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAnimalsQuery, GetAnimalsQueryVariables, GetAnimalsProps<TChildProps, TDataName>>(GetAnimalsDocument, {
      alias: 'getAnimals',
      ...operationOptions
    });
};
export type GetAnimalsQueryResult = ApolloReactCommon.QueryResult<GetAnimalsQuery, GetAnimalsQueryVariables>;