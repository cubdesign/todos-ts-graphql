import { MyContext } from "@/types/graphql.js";
import { Resolvers } from "@/__generated__/graphql.js";
export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    makeTodo: async (_, { makeTodoInput }, { prismaClient }, info) => {
      // console.log(makeTodoInput);
      const newTodo = await prismaClient.todo.create({
        data: {
          title: makeTodoInput.title,
        },
      });
      return {
        todo: newTodo,
      };
    },
  },
};
