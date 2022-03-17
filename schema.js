import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "graphql-tools";

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(
  `${__dirname}/**/*.{queries,mutations}.js`
);
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

// import { gql } from "apollo-server";
// import client from "./client";

// export const typeDefs = gql`
//   type Movie {
//     id: Int
//     title: String
//     year: Int
//   }
//   type Query {
//     movies: [Movie]
//     movie: Movie
//   }
//   type Mutation {
//     createMovie(title: String!): Boolean
//     deleteMovie(title: String!): Boolean
//   }
// `;

// export const resolvers = {
//   Query: {
//     movies: () => client.movie.findMany(),
//     movie: () => ({ title: "Hello", year: 2022 }),
//   },
//   Mutation: {
//     createMovie: (_, args) => {
//       return true;
//     },
//     deleteMovie: (_, args) => {
//       return true;
//     },
//   },
// };
