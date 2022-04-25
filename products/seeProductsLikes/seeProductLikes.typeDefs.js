import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeProductLikes(id: Int!): [User]
  }
`;
