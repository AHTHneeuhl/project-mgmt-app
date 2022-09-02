import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Header from "./components/Header";
import Clients from "./components/Clients";
import AddClient from "./components/AddClient";
import Projects from "./components/Projects";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClient />
        <Projects />
        <Clients />
      </div>
    </ApolloProvider>
  );
};

export default App;
