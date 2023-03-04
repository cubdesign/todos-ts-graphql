import { MyContext } from "@/types/graphql.js";
import { Resolvers } from "@/__generated__/graphql.js";
import crypto from "crypto";
export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/require-await
    makeTodo: async (_, { makeTodoInput }, context, info) => {
      console.log({ makeTodoInput });
      const todoItem = {
        id: crypto.randomUUID(),
        title: makeTodoInput.title,
        updatedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
      };
      return {
        todo: todoItem,
      };
    },
  },
};
