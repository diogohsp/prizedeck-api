import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository";
import { RegisterDatePrizeService } from "../registerDatePrize/registerDatePrize";

export function makeRegisterDatePrizeService(){
    const prismaDatePrizeRepository = new PrismaDatePrizeRepository
    const service = new RegisterDatePrizeService(prismaDatePrizeRepository)

    return service
}