import { render } from "@testing-library/react";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

test("renders learn react link", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});
