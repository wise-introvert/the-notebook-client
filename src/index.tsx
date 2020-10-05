import * as React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

import "./index.scss";
import getConfig, { Config } from "./config";

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
    <ApolloProvider client={client}>
      <div>Hello</div>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
