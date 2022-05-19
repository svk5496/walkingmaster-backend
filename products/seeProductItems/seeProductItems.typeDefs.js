import { gql } from "apollo-server";

export default gql`
  type Query {
    seeProductItems(productId: Int!, colorId: Int!): [ProductItem]
  }
`;
