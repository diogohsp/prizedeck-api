import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { appRoutes } from "./http/routes";

export const app = fastify()

app.register(appRoutes)

// const prisma = new PrismaClient()

// prisma.prize.create({
//     data: {
//         name: 'teste',
//         quantity: 1,
//     }
// })