import { gql } from "@apollo/client";

export const GRADE_QUERY = gql`
  query GradeQuery($studentId: Integer!) {
    allGradesByStudent(studentId: $studentId){
      courseName
      gradeFinal
      gradePeriod
    }
  }
`;