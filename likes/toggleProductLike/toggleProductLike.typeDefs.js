import { gql } from "apollo-server-express";

export default gql`
  type toggleProductLikeResult {
    ok: Boolean!
    Error: String
  }
  type Mutation {
    toggleProductLike(id: Int!): toggleProductLikeResult
  }
`;
