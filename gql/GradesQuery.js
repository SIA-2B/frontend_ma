import { gql } from "@apollo/client";

export const GRADE_QUERY = gql`
  query Grades($id: Int!) {
    allGradesByStudent(id: $id) {
      studentId
      courseId
      courseName
      gradeFinal
      gradePeriod
    }
  }
`;