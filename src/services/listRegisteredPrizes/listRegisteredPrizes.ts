import { PrizesRepository } from "@/repositories/prizes-repository";
import { Prize } from "@prisma/client";

interface ListRegisteredPrizesResponse {
    prizes: Prize[]
}

export class ListRegisterdPrizes{
    constructor(private prizesRepository: PrizesRepository){}

    async execute(): Promise<ListRegisteredPrizesResponse>{
        const prizes = await this.prizesRepository.findAll()

        return {
            prizes: prizes
        }
    }
}