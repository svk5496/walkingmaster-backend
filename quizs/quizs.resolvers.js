import client from "../client";

export default {
  Question: {
    answers: ({ order }) =>
      client.answer.findMany({
        where: {
          questionOrderId: order,
        },
      }),
  },
};
