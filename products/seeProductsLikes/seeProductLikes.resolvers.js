import client from "../../client";

export default {
  Query: {
    seeProductLikes: async (_, { id }) => {
      const likes = await client.like.findMany({
        where: {
          productId: id,
        },
        select: {
          user: true,
        },
      });
      return likes.map((like) => like.user); // return likes까지 하면 [{User}] 즉 User모델이 아닌  user obj를 가져오는데, 이걸 해결하는 방법이 map()
    },
  },
};
