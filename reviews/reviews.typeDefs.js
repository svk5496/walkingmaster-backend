import { gql } from "apollo-server-express";

export default gql`
  type Review {
    id: Int!
    user: User!
    product: Product!
    payload: String!
    isMine: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
