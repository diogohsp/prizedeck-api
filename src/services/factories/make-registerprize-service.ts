import { PrismaPrizeRepository } from "@/repositories/prisma-repositories/prisma-prizes-repository"
import { RegisterPrizeService } from "../registerPrize/registerPrize"

export function makeRegisterPrizeService(){
    const prismaPrizeRepository = new PrismaPrizeRepository
    const registerPrizeService = new RegisterPrizeService(prismaPrizeRepository)

    return registerPrizeService
}