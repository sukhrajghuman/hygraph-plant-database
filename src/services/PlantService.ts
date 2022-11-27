import { GraphQLClient } from "graphql-request";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "@libs/EnvLib";

export const apolloClient = new ApolloClient({
  uri: env.CONTENT_URL,
  cache: new InMemoryCache(),
});

// Use graphqlClient for serverside/static generation requests due to apollo cache
// I suspect this has to do with the way Lambdas work. They start up and stay on for a short time.
// The apollo memory cache is persisted across several of the api requests in getStaticProps.
// Related issue
// https://github.com/vercel/next.js/issues/39735
export const graphqlClient = new GraphQLClient(env.CONTENT_URL, {
  headers: {}, // @TODO could potentially add auth
});
