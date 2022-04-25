import { gql } from "apollo-server";

export default gql`
  type productLike {
    id: Int!
    product: Product!
    createdAt: String!
    updatedAt: String!
  }

  type brandLike {
    id: Int!
    brand: Brand!
    createdAt: String!
    updatedAt: String!
  }
`;
