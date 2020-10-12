import * as React from "react";
import { Grid, Container } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

import { Modal, Card, Navbar } from "../../components";
import { AddUserForm } from "./forms";
import styles from "./styles.module.scss";

type AdminProps = RouteComponentProps<{}>;
type Option = {
  label: string;
  Component: any;
};
export const AdminPage: React.FunctionComponent<AdminProps> = (): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selection, setSelection] = React.useState<Option>();

  const options: Option[] = [
    {
      label: "Add a user",
      Component: <AddUserForm close={() => setOpen(false)} />
    }
  ];

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={1} style={{ paddingTop: "calc(64px + 1em)" }}>
          {options.map((option: Option) => (
            <Grid key={Math.random()} item xs={12} container>
              <Grid item xs={2} />
              <Grid item xs={8}>
                <Card
                  className={styles.card}
                  key={Math.random()}
                  onClick={() => {
                    setSelection(option);
                    setOpen(true);
                  }}
                >
                  {option.label}
                </Card>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal open={open}>{selection?.Component}</Modal>
    </>
  );
};
