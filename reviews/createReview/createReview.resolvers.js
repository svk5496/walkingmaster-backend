import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createComment: protectedResolver(
      async (_, { productId, payload }, { loggedInUser }) => {
        const ok = await client.product.findUnique({
          where: {
            id: productId,
          },
          select: {
            id: true,
          },
        });
        if (!ok) {
          return {
            ok: false,
            error: "product not found",
          };
        }
        await client.comment.create({
          data: {
            payload,
            product: {
              connect: {
                id: productId,
              },
            },
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};
