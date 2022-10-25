import { gql } from "@apollo/client";

export const GRADE_QUERY = gql`
  query GradeQuery {
    allGrades{
      courseName
      gradeFinal
    }
  }
`;