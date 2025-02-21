import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository"
import { DrawPrizeService } from "../drawPrize/drawPrize"
import { PrismaPrizeRepository } from "@/repositories/prisma-repositories/prisma-prizes-repository"

export function makeDrawPrizeService(){
    const prismaDatePrizeRepository = new PrismaDatePrizeRepository
    const prismaPrizeRepository = new PrismaPrizeRepository
    const service = new DrawPrizeService(prismaDatePrizeRepository, prismaPrizeRepository)

    return service

}