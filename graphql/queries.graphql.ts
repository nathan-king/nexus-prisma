import gql from "graphql-tag";

export const AllUsersQuery = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;
