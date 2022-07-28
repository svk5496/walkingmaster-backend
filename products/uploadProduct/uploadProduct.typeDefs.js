import { gql } from "apollo-server";

export default gql`
  type uploadProductResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    uploadProduct(
      category1: String!
      category2: String!
      category3: String
      productName: String!
      brand: String!
      originalPrice: Int!
      discountPrice: Int
      firstOption: String!
      secondOption: String
      thirdOption: String
      thumbnail: String!
      productSliderImage: String
      detailPage1: String!
      rawMaterial: String
      madeIn: String
      ussage: String
      qualityStandard: String
      hashtags: String!
    ): uploadProductResult!
  }
`;
