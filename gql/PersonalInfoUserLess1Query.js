import { gql } from "@apollo/client";

export const PERSONALINFO_QUERY = gql`
  query Personas($user: String!) {
    personaByUsername(username: $user) {
      idPersona
      nombrePersona
      apellidoPersona
    }
  }
`;
