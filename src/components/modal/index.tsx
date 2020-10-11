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
  const [flag, setFlag] = React.useState<boolean>(false);

  React.useEffect(() => {
    setFlag(open);
  }, [open]);

  if (!flag) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
