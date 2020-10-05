import * as React from "react";

import styles from "./styles.module.scss";

type LogoProps = {
  src: string;
  className?: string;
};
export const Logo: React.FunctionComponent<LogoProps> = ({
  src,
  className
}: LogoProps): React.ReactElement => (
  <img
    src={src}
    alt={"LOGO"}
    className={`${styles.logo} ${className && className}`}
  />
);
