import  express  from "express"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PingResolver } from "./resolves/ping";
import { ProductResolver } from "./resolves/ProductResolve";


export async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers:[PingResolver, ProductResolver]
    }),
    context: ({req, res}) => ({req, res})
  });
  await server.start();

  server.applyMiddleware({ app, path:'/graphql' });
  return app
}
