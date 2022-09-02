import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

// components
import Header from "./components/Header";

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
      <BrowserRouter>
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
