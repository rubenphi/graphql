import  express  from "express"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolves/ping";


export async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers:[PingResolver]
    }),
    context: ({req, res}) => ({req, res})
  });
  await server.start();

  server.applyMiddleware({ app, path:'/graphql' });
  return app
}
