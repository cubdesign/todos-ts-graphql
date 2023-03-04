/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import fs from "fs";
import path from "path";
import { globSync } from "glob";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const buildSchema = async () => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const pathToModules = path.join(__dirname, "..", "modules");

  const pathToResolvers = path.join(pathToModules, "**", "*.resolvers.?s");
  const resolversPromises = globSync(pathToResolvers).map(
    (resolversFile) => import(resolversFile)
  );
  const resolvers = (await Promise.all(resolversPromises)).map(
    (fileItems) => fileItems.resolvers
  );

  const pathToTypeDefs = path.join(pathToModules, "**", "*.graphql");

  console.log({ pathToTypeDefs });
  const typeDefs = globSync(pathToTypeDefs).map((typeDefsFile) =>
    fs.readFileSync(typeDefsFile, { encoding: "utf8" })
  );

  return makeExecutableSchema({
    resolvers: mergeResolvers([...resolvers]),
    typeDefs: mergeTypeDefs([...typeDefs]),
  });
};
