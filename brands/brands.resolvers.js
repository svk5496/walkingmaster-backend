import client from "../client";

export default {
  Brand: {
    freeShipping: ({ id }) => {
      const ok = client.brand.findUnique({
        where: {
          id,
          shippingCost: 0,
        },
      });
      if (ok) {
        return true;
      }
      return false;
    },
  },
};
