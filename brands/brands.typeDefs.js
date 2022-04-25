import { gql } from "apollo-server-express";

export default gql`
  type Brand {
    id: Int!
    brandName: String!
    brandEngName: String!
    bio: String!
    brandLogo: String!
    brandCoverImg: String!
    products: [Product]
    companyName: String!
    companyRegistrationNumber: String!
    tongsinNumber: String!
    cs: String!
    createdAt: String!
    updatedAt: String!
    freeShipping: Boolean!
    conditionalShipping: Boolean!
    shippingCost: Int!
    conditionalShippingAmount: Int!
    shippingDay: String!
    additionalShippingCost: Int!
  }
`;
