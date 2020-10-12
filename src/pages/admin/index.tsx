import * as React from "react";
import { Container } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

import { Modal, Card, Navbar } from "../../components";
import { AddUserForm } from "./forms";

type AdminProps = RouteComponentProps<{}>;
type Option = {
  label: string;
  Component: any;
};
export const AdminPage: React.FunctionComponent<AdminProps> = (): React.ReactElement => {
  const [open, setOpen] = React.useState<boolean>(false);

  const options: Option[] = [
    {
      label: "Add a user",
      Component: <AddUserForm close={() => setOpen(false)} />
    }
  ];

  return (
    <>
      <Navbar />
      <Container style={{ padding: "78px 1em 1em 1em" }}>
        {options.map((option: Option) => (
          <>
            <Card
              style={{
                width: "100%",
                height: "48px",
                borderRadius: ".1em 1em"
              }}
              key={Math.random()}
              onClick={() => setOpen(true)}
            >
              {option.label}
            </Card>
            <Modal open={open}>{option.Component}</Modal>
          </>
        ))}
      </Container>
    </>
  );
};
