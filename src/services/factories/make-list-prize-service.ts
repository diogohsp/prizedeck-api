import { PrismaPrizeRepository } from "@/repositories/prisma-repositories/prisma-prizes-repository";
import { ListRegisterdPrizes } from "../listRegisteredPrizes/listRegisteredPrizes";

export function makeListRegisteredPrizeService(){
    const prismaPrizeRepository = new PrismaPrizeRepository
    const service = new ListRegisterdPrizes(prismaPrizeRepository)

    return service
}