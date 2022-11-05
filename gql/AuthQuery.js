import { gql } from "@apollo/client";

export const AUTH_QUERY = gql`
  mutation Credenciales($username: String!, $password: String!) {
    createAuth(auth: { username: $username, password: $password }) {
      token
    }
  }
`;