import client from "../../client";

export default {
  Query: {
    seeProductItems: (_, { productId, colorId }) =>
      client.productItem.findMany({
        where: {
          productId: productId,
          colorId: colorId,
        },
      }),
  },
};
