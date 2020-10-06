import * as React from "react";

import { Navbar, Authentication } from "./components";

export const Wrapper: React.FunctionComponent<{}> = (): React.ReactElement => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <Navbar />
    <div
      style={{
        height: "calc(100vh - 64px)",
        width: "100%",
        display: "grid",
        placeItems: "center"
      }}
    >
      <Authentication
        onLogin={() => {
          console.log("LOGGED IN");
        }}
      >
        <Authentication.Form />
        <Authentication.MessageBox />
        <Authentication.LoginButton />
      </Authentication>
    </div>
  </div>
);
