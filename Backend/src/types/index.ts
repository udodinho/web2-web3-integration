import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { ContractResolver } from "../resolvers/contractResolver";
import { UserResolver } from "../resolvers/userResolver";

dotenv.config();

async function bootstrap() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }

  const schema = await buildSchema({
    resolvers: [ContractResolver, UserResolver],
  });

  const app = express();
  const server = new ApolloServer({ schema });
  await server.start();
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server)
  );

  app.listen(4000, () => {
    console.log("Server running on http://localhost:4000/graphql");
  });
}

bootstrap().catch((error) => console.error(error));
