import { gql } from "@apollo/client";

export const GetSubjectsQuery = gql`
  query GetSubjects($id: String) {
    subjects(id: $id) {
      id
      name
    }
  }
`;

export const GetSubjectsWithDocumentsQuery = gql`
  query GetSubjects($id: String) {
    subjects(id: $id) {
      id
      name
      documents {
        id
        name
        url
      }
    }
  }
`;
