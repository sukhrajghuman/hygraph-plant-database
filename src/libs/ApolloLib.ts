import { ApolloClient, InMemoryCache } from "@apollo/client";

import { env } from "./EnvLib";

const client = new ApolloClient({
  uri: env.CONTENT_URL,
  cache: new InMemoryCache(),
});

export default client;
