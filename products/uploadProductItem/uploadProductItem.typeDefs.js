import { gql } from "apollo-server";

export default gql`
  type uploadProductItemResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    uploadProductItem(
      productName: String!
      optionName: String!
      firstOptionName: String!
      secondOptionName: String
      thirdOptionName: String
      additionalCost: Int!
      inStock: Int!
      sku: String
    ): uploadProductItemResult!
  }
`;
