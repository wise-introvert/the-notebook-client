import { gql } from "@apollo/client";

export const LogoutMutation = gql`
  mutation {
    logout
  }
`;
