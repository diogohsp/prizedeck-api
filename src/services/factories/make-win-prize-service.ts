import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository"
import { WinPrize } from "../winPrize/winPrize"

export function makeWinPrizeService(){
    const prismaDatePrizeRepository = new PrismaDatePrizeRepository
    const winPrizeService = new WinPrize(prismaDatePrizeRepository)

    return winPrizeService

}