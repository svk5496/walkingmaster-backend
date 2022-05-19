import { gql } from "apollo-server";

export default gql`
  type Product {
    id: Int!
    productName: String!
    productEngName: String
    price: Int!
    discountRate: Int!
    brand: Brand!
    sizes: [Size]
    colors: [Color]
    thumbnail: String!
    detailPage1: String!
    detailPage2: String!
    madeIn: String!
    caution: String!
    wrranty: String!
    best: String!
    onSale: Boolean!
    hashtags: [Hashtag]
    productLikes: Int!
    createdAt: String!
    updatedAt: String!
    reviews: Int!
    isLiked: Boolean!
    productItem: [ProductItem]
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
