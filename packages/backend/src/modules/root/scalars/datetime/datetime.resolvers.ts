import { Resolvers } from "@/__generated__/graphql.js";
import { DateTimeResolver } from "graphql-scalars";

// function validateDateTime(value: string) {
//   const RFC_3339_REGEX =
//     /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;

//   const dateTimeString = value.toUpperCase();

//   if (!RFC_3339_REGEX.test(dateTimeString)) {
//     return false;
//   }

//   return true;
// }
export const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
  // DateTime: new GraphQLScalarType({
  //   name: "DateTime",
  //   description: "DateTime custom scalar type",
  //   serialize(value) {
  //     console.log("serialize");
  //     console.log({ value });
  //     return value;
  //   },
  //   parseValue(value) {
  //     console.log("parseValue");
  //     console.log({ value });

  //     if (typeof value === "string") {
  //       if (!validateDateTime(value)) {
  //         throw new GraphQLError(
  //           `DateTime cannot represent an invalid date-time string ${value}.`
  //         );
  //       }
  //       return new Date(value);
  //     }
  //   },
  //   parseLiteral(ast) {
  //     console.log("parseLiteral");
  //     console.log({ ast });

  //     if (!("value" in ast)) {
  //       throw new GraphQLError(
  //         `DateTime cannot represent an invalid date-time string.`
  //       );
  //     }

  //     const { value, kind } = ast;

  //     if (kind !== Kind.STRING || typeof value !== "string") {
  //       throw new GraphQLError(
  //         `DateTime cannot represent a non string type ${kind}. ${value.toString()}`
  //       );
  //     }

  //     if (!validateDateTime(value)) {
  //       throw new GraphQLError(
  //         `DateTime cannot represent an invalid date-time string ${value}.`
  //       );
  //     }

  //     return new Date(value);
  //   },
  // }),
};
