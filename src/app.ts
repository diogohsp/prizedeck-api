import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

export const app = fastify()

const prisma = new PrismaClient()

prisma.prize .create({
    data: {
        name: 'teste',
        quantity: '',
        id
    }
})