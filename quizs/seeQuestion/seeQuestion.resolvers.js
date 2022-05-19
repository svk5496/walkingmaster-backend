import client from "../../client";

export default {
  Query: {
    seeQuestion: (_, { order }) =>
      client.question.findUnique({
        where: {
          order,
        },
      }),
  },
};
