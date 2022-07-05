import express from "express";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";
import resolvers from "./gql/resolvers/indexResolver.js";
import typeDefs from "./gql/typeDefs.js";
const app = express();

mongoose
  .connect("mongodb://localhost:27017/test")
  .then((_) => console.log("connected to db"))
  .then()
  .catch((err) => console.log(err));

const startServer = async () => {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, console.log("server was running"));
};
startServer();
