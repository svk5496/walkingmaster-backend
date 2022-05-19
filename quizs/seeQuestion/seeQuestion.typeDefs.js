import { gql } from "apollo-server";

export default gql`
  type Query {
    seeQuestion(order: Int!): Question
  }
`;
