import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository"
import { DrawPrizeService } from "../drawPrize/drawPrize"

export function makeDrawPrizeService(){
    const prismaDatePrizeRepository = new PrismaDatePrizeRepository
    const service = new DrawPrizeService(prismaDatePrizeRepository)

    return service

}