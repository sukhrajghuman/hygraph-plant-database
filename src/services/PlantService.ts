import { GraphQLClient } from "graphql-request";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "@libs/EnvLib";

export const apolloClient = new ApolloClient({
  uri: env.CONTENT_URL,
  cache: new InMemoryCache(),
});

export const graphqlClient = new GraphQLClient(env.CONTENT_URL, {
  headers: {},
});
