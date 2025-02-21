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

     async findPrizeCode(code: number): Promise<Prize | null> {
            const prizeCode = await prisma.prize.findUnique({
                where:{
                    code: code,
                },
            })
    
            return prizeCode
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

    async findAll(): Promise<Prize[]> {
        const prizes = await prisma.prize.findMany({ orderBy: {
            code: "asc"
        } })

        return prizes
    }
    
}