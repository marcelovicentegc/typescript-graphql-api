import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { Animal } from "../database/entities/index";

const resolvers: IResolvers = {
  Query: {
    animal: (_, { id }) => Animal.findOne(id),
    animals: () => Animal.find()
  },
  Mutation: {
    createAnimal: async (_, { id, species, favoriteFood }) => {
      const animal = Animal.create({
        id: id,
        species: species,
        favoriteFood: favoriteFood
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
    }
  }
};

export default resolvers;
