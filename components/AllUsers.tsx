import React from "react";
import { useQuery } from "urql";
import gql from "graphql-tag";

export const AllUsersQuery = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`;

type AllUsersData = {
  allUsers: {
    id: String;
    name: string;
  }[];
};

const AllUsers: React.FC = () => {
  const [result] = useQuery<AllUsersData>({
    query: AllUsersQuery,
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <p>There are {data?.allUsers.length} user(s) in the database:</p>
      <ul>
        {data?.allUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default AllUsers;
