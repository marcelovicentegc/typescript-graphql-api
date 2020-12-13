import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { Animal } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

// Trust me, as your project grows, you'll want
// to pick the types for your query and mutation
// resolvers
const queries: Pick<QueryResolvers, "animal" | "animals"> = {
  animal: async (_, { id }) => (await Animal.findOne(id)) ?? null,
  animals: async () => (await Animal.find()) ?? [],
};

const mutations: Pick<
  MutationResolvers,
  "createAnimal" | "updateAnimal" | "deleteAnimal"
> = {
  createAnimal: async (_, { species, favoriteFood }) => {
    const animal = Animal.create({
      species: species,
      favoriteFood: favoriteFood,
    });

    await animal.save();

    return animal;
  },
  updateAnimal: async (_, { id, ...args }) => {
    try {
      await Animal.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteAnimal: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(Animal)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const animals: IResolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutations,
  },
};
