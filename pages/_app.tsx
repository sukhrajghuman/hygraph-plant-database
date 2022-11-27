import { ApolloProvider } from "@apollo/client";
import client from "@libs/ApolloLib";
import ThemeProvider from "@theme/ThemeProvider";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
