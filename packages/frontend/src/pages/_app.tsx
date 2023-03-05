import React from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Todo: {
        fields: {
          createdAt: {
            read(value) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              return new Date(value);
            },
          },
          updatedAt: {
            read(value) {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              return new Date(value);
            },
          },
        },
      },
    },
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
