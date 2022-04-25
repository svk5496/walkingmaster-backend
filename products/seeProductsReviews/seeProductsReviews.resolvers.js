import client from "../../client";

export default {
  Query: {
    seeProductsComments: (_, { id, lastId }) =>
      client.product.findUnique({ where: { id } }).comments({
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
        orderBy: {
          createdAt: "asc",
        },
      }),
  },
};
