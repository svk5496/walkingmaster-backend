import client from "../client";

export default {
  Question: {
    answers: ({ id }) =>
      client.answer.findMany({
        where: {
          questionId: id,
        },
      }),
  },
};
