import * as production from "./production.json";
import * as development from "./development.json";
import * as test from "./test.json";
import * as defaultConfig from "./default.json";

export type Config = {
  cred: {
    api: {
      url: string;
    };
    apollo: {
      link: {
        credentials: "include" | "same-origin";
      };
    };
  };
};

export default (): Config => {
  const { NODE_ENV = "development" } = process.env;
  let config: Config;
  switch (NODE_ENV) {
    case "production":
      config = production as Config;
      break;
    case "development":
      config = development as Config;
      break;
    case "test":
      config = test as Config;
      break;
    default:
      config = defaultConfig as Config;
      break;
  }

  return config;
};
