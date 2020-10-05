import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import "./App.css";
const LoginMutation = gql`
  mutation Login($input: UserLoginInput!) {
    login(input: $input) {
      id
      username
    }
  }
`;

const GetQuery = gql`
  query {
    departments {
      id
      name
      courses {
        id
        name
        subjects {
          id
          name
          documents {
            id
            url
            name
          }
        }
      }
    }
  }
`;

function App() {
  const [login, { data }] = useMutation(LoginMutation);
  // const { loading, error, data: d } = useQuery(GetQuery);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const onSubmit = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    login({
      variables: {
        input: {
          username,
          password
        }
      }
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <span>
        <label htmlFor={"username"}>Username</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          id={"username"}
          name={"username"}
          value={username}
        />
      </span>
      <span>
        <label htmlFor={"password"}>Password</label>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          id={"password"}
          type={"password"}
          name={"password"}
          value={password}
        />
      </span>
      <button type={"submit"} onClick={onSubmit}>
        Submit
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}

export default App;
