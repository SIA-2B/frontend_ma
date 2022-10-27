import { gql } from "@apollo/client";

export const GRADE_AUTH = gql`
  query Auth {
    allGrades{
      courseName
      gradeFinal
    }
  }
`;