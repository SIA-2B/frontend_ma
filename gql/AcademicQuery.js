import { gql } from "@apollo/client";

export function ACADEMIC_STUDENT(id){
  return gql`
  query AcacemicAllId{
    callingById(datos:{student_id:"${id}"}){
      student_id
      credits_id
      papa
      pa
      papi
      study_plan_id
      study_plan_name
      facultad
    }
  }`;
}