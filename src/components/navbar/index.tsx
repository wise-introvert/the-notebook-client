import * as React from "react";
import { AiOutlineUser } from "react-icons/ai";

import styles from "./styles.module.scss";
import getConfig, { Config } from "../../config";

const config: Config = getConfig();

type NavbarProps = {
  logo?: string;
  className?: string;
};
export const Navbar: React.FunctionComponent<NavbarProps> = ({
  logo,
  className
}: NavbarProps): React.ReactElement => (
  <nav className={`${styles.navbar} ${className && className}`}>
    {logo ? (
      <img src={logo} alt={"The Notebook"} className={styles.logo} />
    ) : (
      <h3>The Notebook</h3>
    )}
    <AiOutlineUser size={"1.5em"} />
  </nav>
);
