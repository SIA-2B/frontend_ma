import { gql } from "@apollo/client";

export const GRADE_QUERY = gql`
{
  allGradesByStudent(id: 10){
    studentId
    courseId
    courseName
    gradeFinal
    gradePeriod
  }
}
`;