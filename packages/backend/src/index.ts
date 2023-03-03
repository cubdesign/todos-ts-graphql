import http from "http";
import { ApolloServer } from "@apollo/server";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { expressMiddleware } from "@apollo/server/express4";
import greetResolvers from "./modules/root/greet/greet.resolvers.js";
import greetTypeDefs from "./modules/root/greet/greet.typeDefs.js";
import makeTodoResolvers from "./modules/todos/make-todo/make-todo.resolvers.js";
import makeTodoTypeDefs from "./modules/todos/make-todo/make-todo.typeDefs.js";
import { MyContext } from "./types/graphql.js";

async function main() {
  const PORT = process.env.PORT || 3001;
  const app = express();

  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    typeDefs: mergeTypeDefs([greetTypeDefs, makeTodoTypeDefs]),
    resolvers: mergeResolvers([greetResolvers, makeTodoResolvers]),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      // eslint-disable-next-line @typescript-eslint/require-await
      context: async ({ req, res }) => ({ req, res }),
    })
  );

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: PORT }, resolve);
  });

  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}
main().catch((error) => {
  console.error(error);
  process.exit(1);
});
