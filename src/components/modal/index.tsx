import * as React from "react";

import styles from "./styles.module.scss";

type ModalProps = {
  open: boolean;
  children?: React.ReactNode;
};
export const Modal: React.FunctionComponent<ModalProps> = ({
  open,
  children
}: ModalProps): React.ReactElement | null => {
  React.useEffect(() => {
    console.log("open: ", open);
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
