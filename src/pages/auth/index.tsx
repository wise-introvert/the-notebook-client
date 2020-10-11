import * as React from "react";
import { RouteComponentProps } from "react-router";
import Cookies from "universal-cookie";

import { Authentication } from "../../components";
import getConfig, { Config } from "../../config";
import styles from "./styles.module.scss";

const config: Config = getConfig();

type AuthenticationPageProps = RouteComponentProps<{}>;
export const AuthenticationPage: React.FunctionComponent<AuthenticationPageProps> = (
  props: AuthenticationPageProps
): React.ReactElement => (
  <div className={styles.container}>
    <Authentication
      onLogin={async (data: any): Promise<void> => {
        console.log("data: ", data);
        new Cookies().set("session", true);
        new Cookies().set("role", data.login.role);
        props.history.push(config.routes.home.root);
      }}
    >
      <Authentication.Logo
        className={styles.logo}
        src={
          "https://livethewyatt.com/wp-content/uploads/2015/10/placeholder-circle.png"
        }
      />
      <Authentication.Form />
      <Authentication.MessageBox />
      <Authentication.LoginButton />
    </Authentication>
  </div>
);
