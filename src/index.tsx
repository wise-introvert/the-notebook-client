import * as React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";
import getConfig, { Config } from "./config";
import * as serviceWorker from "./serviceWorker";

const config: Config = getConfig();

const link: any = createHttpLink({
  uri: config.cred.api.url,
  credentials: config.cred.apollo.link.credentials
});
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <div />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
