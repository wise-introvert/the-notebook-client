import * as React from "react";
import { Authentication } from "./components";

export const Wrapper: React.FunctionComponent<{}> = (): React.ReactElement => (
  <Authentication
    onLogin={(data: any) => {
      console.log("data: ", data);
    }}
  >
    <Authentication.Logo
      src={
        "https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo2.jpg"
      }
    />
    <Authentication.Form />
    <Authentication.MessageBox />
    <Authentication.LoginButton />
  </Authentication>
);
