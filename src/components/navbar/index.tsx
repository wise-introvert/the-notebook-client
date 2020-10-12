import * as React from "react";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { RouteComponentProps, withRouter } from "react-router";

import styles from "./styles.module.scss";
import getConfig, { Config } from "../../config";
import { isLoggedIn, isBoss } from "../../lib";
import { useMutation } from "@apollo/client";
import { LogoutMutation } from "../../api";

const config: Config = getConfig();

type NavbarProps = {
  logo?: string;
  className?: string;
} & RouteComponentProps<{}>;
const _Navbar: React.FunctionComponent<NavbarProps> = ({
  logo,
  className,
  history,
}: NavbarProps): React.ReactElement => {
  const [logout, { loading }] = useMutation(LogoutMutation);

  return (
    <nav className={`${styles.navbar} ${className && className}`}>
      {logo ? (
        <img src={logo} alt={"The Notebook"} className={styles.logo} />
      ) : (
        <span
          onClick={() => {
            history.push(config.routes.home.root);
          }}
          className={styles.logo}
        >
          <h3>The Notebook</h3>
        </span>
      )}
      <div className={styles.navbarLinks}>
        {isLoggedIn() ? (
          <button
            className={styles.logoutButton}
            disabled={loading}
            onClick={() => {
              logout().then(() => history.push(config.routes.user.auth));
            }}
          >
            {loading ? "Logging out..." : "Logout"}
          </button>
        ) : (
          <AiOutlineUser size={"1.5em"} />
        )}
        {isBoss() && (
          <span
            onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
              e.preventDefault();
              history.push(config.routes.admin.root);
            }}
            className={styles.settings}
          >
            <AiOutlineSetting size={"1.5em"} />
          </span>
        )}
      </div>
    </nav>
  );
};

export const Navbar = withRouter(_Navbar);
