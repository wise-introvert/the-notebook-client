import { gql } from "@apollo/client";

export const GetCoursesQuery = gql`
  query GetCourses($id: String) {
    courses(id: $id) {
      id
      name
    }
  }
`;

export const GetCoursesWithSubjectsQuery = gql`
  query GetCourses($id: String) {
    courses(id: $id) {
      id
      name
      subjects {
        id
        name
      }
    }
  }
`;
