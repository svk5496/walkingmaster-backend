import client from "../../client";

export default {
  Query: {
    seeProducts: () => client.product.findMany({}),
  },
};
