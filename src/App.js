import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import GlobalStyle from "./Global";
import Home from "./pages/Home";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "/.netlify/functions/graphql",
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <GlobalStyle />
      </>
    </ApolloProvider>
  );
};

export default App;
