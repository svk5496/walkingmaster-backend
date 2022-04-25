import { gql } from "apollo-server-express";

export default gql`
  type createCommentResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createComment(productId: Int!, payload: String!): createCommentResult!
  }
`;
