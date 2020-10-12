import * as React from "react";
import {
  Container,
  Grid,
  TextField,
  ButtonGroup,
  Button
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import Select, { OptionTypeBase } from "react-select";

import { RegistrationMutation } from "../../../api";

type AddUserFormProps = {
  close: () => any;
};
export const AddUserForm: React.FunctionComponent<AddUserFormProps> = ({
  close
}: AddUserFormProps): React.ReactElement => {
  const [register, { data, loading, error }] = useMutation(
    RegistrationMutation
  );
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [role, setRole] = React.useState<string>();
  const options: OptionTypeBase[] = [
    {
      value: "ADMIN",
      label: "Admin"
    },
    {
      value: "TEACHER",
      label: "Teacher"
    },
    {
      value: "STUDENT",
      label: "Student"
    },
    {
      value: "CR",
      label: "CR"
    }
  ];

  const onChange = (value: any): any => {
    setRole(value.value);
  };

  React.useEffect(() => {
    if (data) {
      close();
    }
  }, [data]);

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();

    const payload: any = {
      input: {
        username,
        password,
        email,
        role,
        name
      }
    };

    register({ variables: payload });
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Grid style={{ padding: "1em" }} container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={"Username"}
              variant={"outlined"}
              size={"small"}
              disabled={loading}
              name={"username"}
              type={"username"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setUsername(e.target.value)
              }
              value={username}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={"Password"}
              variant={"outlined"}
              size={"small"}
              disabled={loading}
              name={"password"}
              type={"password"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setPassword(e.target.value)
              }
              value={password}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={"Confirm Password"}
              variant={"outlined"}
              size={"small"}
              disabled={loading}
              name={"confirmPassword"}
              type={"password"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setConfirmPassword(e.target.value)
              }
              value={confirmPassword}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={"Name"}
              variant={"outlined"}
              size={"small"}
              disabled={loading}
              name={"name"}
              type={"text"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setName(e.target.value)
              }
              value={name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label={"Email"}
              variant={"outlined"}
              size={"small"}
              disabled={loading}
              name={"email"}
              type={"email"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setEmail(e.target.value)
              }
              value={email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              isDisabled={loading}
              onChange={onChange}
              options={options}
            />
          </Grid>
          {error && (
            <Grid item xs={12} sm={6}>
              {error.message}
            </Grid>
          )}
          <Grid item xs={false} sm={8} />
          <Grid item xs={12} sm={4}>
            <ButtonGroup fullWidth>
              <Button
                color={"secondary"}
                disabled={loading}
                type={"reset"}
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                color={"primary"}
                disabled={loading}
                type={"submit"}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
