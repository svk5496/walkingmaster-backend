import { gql } from "apollo-server";

export default gql`
  type Query {
    searchBrand(brandName: String!, startDate: String, endDate: String): [Brand]
  }
`;
