import { GraphQLError } from "graphql";
import { MyContext } from "@/types/graphql.js";
import { Resolvers } from "@/__generated__/graphql.js";
export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    removeTodo: async (_, { removeTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: removeTodoInput.todoId,
        },
      });
      if (!existingTodo) {
        // TODO: handle an error
        throw new GraphQLError("Todo not found");
      }
      await prismaClient.todo.delete({
        where: {
          id: existingTodo.id,
        },
      });
      return {
        todo: existingTodo,
      };
    },
  },
};
