import { gql } from "@apollo/client";

export const PERSONALINFO_QUERY_LESS = gql`
  query PersonasUserID($user: String!) {
    personaByUsername(username: $user) {
      idPersona
      nombrePersona
      apellidoPersona
    }
  }
`;
