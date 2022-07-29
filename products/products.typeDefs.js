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
    extraOptions: [Color]
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
    name: String!
    products: Product!
    ProductItem: ProductItem!
  }

  type Size {
    id: Int!
    name: String!
    products: Product!
    ProductItem: ProductItem!
  }

  type ProductItem {
    id: Int!
    product: Product!
    color: Color!
    size: Size!
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
