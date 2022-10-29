import { gql } from "@apollo/client";

export const ACADEMIC_STUDENT = gql`
  query Acacemic($id: String!) {
    callingById(datos:{student_id:$id}) {
      student_id
      credits_id
      papa
      pa
      papi
      study_plan_id
      study_plan_name
      facultad
    }
  }
`;

export const ACADEMIC_COURSES = gql`
  query Courses($id: String!, $name: String!){
    coursesById(datos: {
      student_id: $id,
      study_plan_name: $name
    }){
      _id
      datos_id
      codigo_id
      name
      credit
      periodo
      nota
      plan
    }
  }

`;