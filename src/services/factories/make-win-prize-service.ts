import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository"
import { WinPrizeService } from "../winPrize/winPrize"

export function makeWinPrizeService(){
    const prismaDatePrizeRepository = new PrismaDatePrizeRepository
    const service = new WinPrizeService(prismaDatePrizeRepository)

    return service

}