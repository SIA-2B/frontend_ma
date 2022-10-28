import { gql } from "@apollo/client";

export const AUTH_QUERY = gql`
  mutation {
    createAuth(auth: { username: "developer", password: "developer" }) {
      token
    }
  }
`;