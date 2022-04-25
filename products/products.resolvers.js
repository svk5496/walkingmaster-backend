import client from "../client";

export default {
  Product: {
    colors: ({ id }) => {
      return client.color.findMany({
        where: {
          products: {
            some: {
              id,
            },
          },
        },
      });
    },
    sizes: ({ id }) => {
      return client.size.findMany({
        where: {
          products: {
            some: {
              id,
            },
          },
        },
      });
    },

    hashtags: ({ id }) =>
      client.hashtag.findMany({
        where: {
          products: {
            some: {
              id,
            },
          },
        },
      }),
    productLikes: ({ id }) =>
      client.productLike.count({
        where: {
          productId: id,
        },
      }),
    reviews: ({ id }) =>
      client.review.count({
        where: {
          productId: id,
        },
      }),
    brand: ({ brandId }) =>
      client.brand.findUnique({
        where: {
          id: brandId,
        },
      }),

    isLiked: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const ok = await client.productLike.findUnique({
        where: {
          productId_userId: {
            productId: id,
            userId: loggedInUser.id,
          },
        },
        select: {
          id: true,
        },
      });
      if (ok) {
        return true;
      }
      return false;
    },
  },
  ProductItem: {
    inStock: async ({ id }) => {
      const ok = await client.productItem.findFirst({
        where: {
          id,
        },
        select: {
          stockAmount: 0,
        },
      });
      if (ok) {
        return false;
      }
      return true;
    },
  },

  Color: {
    products: ({ id }) => {
      return client.color.findUnique({
        where: {
          id,
        },
      });
    },
  },

  Size: {
    products: ({ id }) => {
      return client.size.findUnique({
        where: {
          id,
        },
      });
    },
  },

  Hashtag: {
    products: ({ id }, { page }, { loggedInUser }) => {
      return client.hashtag
        .findUnique({
          where: {
            id,
          },
        })
        .products();
    },
    totalProducts: ({ id }) =>
      client.product.count({
        where: {
          hashtags: {
            some: {
              id,
            },
          },
        },
      }),
  },
};
