import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeProductsComments(id: Int!): [Review]
  }
`;
