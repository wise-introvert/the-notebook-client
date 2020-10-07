import * as React from "react";

import styles from "./styles.module.scss";

type CardProps = {
  children: React.ReactNode;
  style?: any;
  className?: string;
};
export const Card: React.FunctionComponent<CardProps> = ({
  style,
  className,
  children
}: CardProps): React.ReactElement => {
  return (
    <div className={`${styles.card} ${className && className}`} style={style}>
      {children}
    </div>
  );
};
