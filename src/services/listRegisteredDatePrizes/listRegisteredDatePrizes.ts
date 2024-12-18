import { DatePrizeRepository } from "@/repositories/dateprizes-repository";
import { DatePrize } from "@prisma/client";

interface ListRegisteredDatePrizesResponse {
    datePrizes: DatePrize[]
}

export class ListRegisterdDatePrizes{
    constructor(private datePrizesRepository: DatePrizeRepository){}

    async execute(): Promise<ListRegisteredDatePrizesResponse>{
        const datePrizes = await this.datePrizesRepository.findAll()

        return {
            datePrizes: datePrizes
        }
    }
}