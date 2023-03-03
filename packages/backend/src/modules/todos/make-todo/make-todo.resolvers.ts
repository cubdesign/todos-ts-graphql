import { MyContext } from "@/types/graphql.js";

const resolvers = {
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/require-await
    makeTodo: async (_: any, args: any, context: MyContext, info: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      console.log({ args });
      return "todo has been created";
    },
  },
};
export default resolvers;
