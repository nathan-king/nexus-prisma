import gql from "graphql-tag";

const AllUsersQuery = gql`
  query {
    allUsers {
      id
      name
    }
  }
`;
