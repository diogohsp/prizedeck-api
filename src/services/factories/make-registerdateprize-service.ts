import { PrismaDatePrizeRepository } from "@/repositories/prisma-repositories/prisma-dateprizes-repository";
import { RegisterDatePrizeService } from "../registerDatePrize/registerDatePrize";

export function makeRegisterDatePrizeService(){
    const prismaDatePrizeRepository = new PrismaDatePrizeRepository
    const registerDatePrizeService = new RegisterDatePrizeService(prismaDatePrizeRepository)

    return registerDatePrizeService
}