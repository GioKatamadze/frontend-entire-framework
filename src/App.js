import React from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import HomePage from "./pages/HomePage.js";
import SubPage from "./pages/SubPage.js";

const link = new HttpLink({
  uri: "https://test-task.entireframework.com/cms/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<HomePage />} />
          <Route path="/subpage/:id" component={SubPage} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
