import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchProducts(keyword: String!): [Product]
  }
`;
