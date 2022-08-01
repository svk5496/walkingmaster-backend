import { gql } from "apollo-server";

export default gql`
  type Product {
    id: Int!
    productName: String!
    productEngName: String
    originalPrice: String!
    discountPrice: String
    brand: Brand!
    sizes: [Size]
    colors: [Color]
    extraOptions: [ExtraOption]
    thumbnail: String!
    productSliderImage: String
    detailPage1: String!
    detailPage2: String!
    madeIn: String!
    onSale: Boolean!
    onShowing: Boolean!
    firstOption: String!
    secondOption: String
    thirdOption: String
    rawMaterial: String
    ussage: String
    qualityStandard: String
    hashtags: [Hashtag]
    productLikes: Int!
    createdAt: String!
    updatedAt: String!
    reviews: Int!
    isLiked: Boolean!
    productItems: [ProductItem]
  }

  type Color {
    id: Int!
    color: String!
    products: Product!
  }

  type Size {
    id: Int!
    size: String!
    products: Product!
  }

  type ExtraOption {
    id: Int!
    extraOption: String!
    products: Product!
  }

  type ProductItem {
    id: Int!
    productItem: String!
    product: Product!
    color: String
    size: String
    extraOption: String
    additionalPrice: Int
    sku: String
    stockAmount: Int!
    inStock: Boolean!
  }

  type Hashtag {
    id: Int!
    hashtag: String!
    products: [Product]
    totalProducts: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
