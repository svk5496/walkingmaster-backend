import { gql } from "apollo-server";

export default gql`
  type Question {
    id: Int!
    order: Int!
    isQ: Boolean!
    isMultipleChoice: Boolean!
    quiz: String
    hint: String
    keyName: String!
    isBlink: Boolean!
    isAnswerPic: Boolean!
    picBefore: String
    picAfter: String
    comment1: String
    comment2: String
    comment3: String
    comment4: String
    answers: [Answer]
  }

  type Answer {
    id: Int!
    answer: String!
    explain: String
    picture: String
    question: Question!
    questionId: Int
    keyValue: String!
    skip: Int!
  }
`;
