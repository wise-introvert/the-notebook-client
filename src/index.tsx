import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
  InMemoryCache
} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const link: any = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://the-notebook-graph.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
  credentials: "include"
});
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
