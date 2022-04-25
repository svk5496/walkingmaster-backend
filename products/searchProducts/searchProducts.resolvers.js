import client from "../../client";

export default {
  Query: {
    searchProducts: (_, { keyword }) =>
      client.product.findMany({
        where: { productName: { startsWith: keyword } },
      }),
  },
};
