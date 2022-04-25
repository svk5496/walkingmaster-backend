import { GraphQLUpload } from "graphql-upload";
import client from "../../client";

export default {
  Query: {
    seeProfile: (_, { id }) =>
      client.user.findUnique({
        where: {
          id,
        },
        include: {
          following: true,
          followers: true,
        },
      }),
  },
  Upload: GraphQLUpload,
};
