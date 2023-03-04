import http from "http";
import { ApolloServer } from "@apollo/server";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import { MyContext } from "./types/graphql.js";
import { buildSchema } from "./utils/buildSchema.js";
import cors from "cors";

const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.$connect();
  const PORT = process.env.PORT || 3001;
  const app = express();

  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    schema: await buildSchema(),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );

  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      // eslint-disable-next-line @typescript-eslint/require-await
      context: async ({ req, res }) => ({ req, res, prismaClient }),
    })
  );

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: PORT }, resolve);
  });

  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
}
main().catch(async (error) => {
  console.error(error);
  await prismaClient.$disconnect();

  process.exit(1);
});
