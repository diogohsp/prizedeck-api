import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository"
import { ListRegisterdDatePrizes } from "../listRegisteredDatePrizes/listRegisteredDatePrizes"


export function makeListRegisteredDatePrizeService(){
    const prismaPrizeRepository = new PrismaDatePrizeRepository
    const service = new ListRegisterdDatePrizes(prismaPrizeRepository)

    return service
}