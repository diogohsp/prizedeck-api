import { Prize, Prisma } from "@prisma/client";
import { PrizesRepository } from "../prizes-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPrizeRepository implements PrizesRepository{
    async findById(id: string): Promise<Prize | null> {
        const prize = await prisma.prize.findUnique({
            where: {
                id
            }
        })

        return prize
    }
    async findByName(name: string): Promise<Prize | null> {
        const prize = await prisma.prize.findUnique({
            where: {
                name,
            }
        })

        return prize
    }

    async registerPrize(data: Prisma.PrizeCreateInput): Promise<Prize> {
        const prize = await prisma.prize.create({
        data: data
    })

    return prize
    }
    
}