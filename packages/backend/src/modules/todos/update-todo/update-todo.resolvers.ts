import { GraphQLError } from "graphql";
import { MyContext } from "@/types/graphql.js";
import { Resolvers } from "@/__generated__/graphql.js";
export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    updateTodo: async (_, { updateTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: updateTodoInput.todoId,
        },
      });
      if (!existingTodo) {
        // TODO: handle an error
        throw new GraphQLError("Todo not found");
      }

      if (typeof updateTodoInput.title === "string") {
        existingTodo.title = updateTodoInput.title;
      }

      if (typeof updateTodoInput.isCompleted === "boolean") {
        existingTodo.isCompleted = updateTodoInput.isCompleted;
      }

      await prismaClient.todo.update({
        where: {
          id: existingTodo.id,
        },
        data: {
          title: existingTodo.title,
          isCompleted: existingTodo.isCompleted,
        },
      });
      return {
        todo: {
          ...existingTodo,
          createdAt: existingTodo.createdAt.toISOString(),
          updatedAt: existingTodo.updatedAt.toISOString(),
        },
      };
    },
  },
};
