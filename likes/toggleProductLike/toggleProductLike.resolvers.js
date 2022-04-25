import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    toggleProductLike: protectedResolver(
      async (_, { id }, { loggedInUser }) => {
        const product = await client.product.findUnique({
          where: {
            id,
          },
        });
        if (!product) {
          return {
            ok: false,
            error: "Product not found",
          };
        }
        const likeWhere = {
          productId_userId: {
            userId: loggedInUser.id,
            productId: id,
          },
        };
        const like = await client.productLike.findUnique({
          where: likeWhere,
        });
        if (like) {
          await client.productLike.delete({
            where: likeWhere,
          });
        } else {
          await client.productLike.create({
            data: {
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              product: {
                connect: {
                  id: product.id,
                },
              },
            },
          });
        }
        return {
          ok: true,
        };
      }
    ),
  },
};
