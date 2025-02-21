import { DatePrizeRepository } from "@/repositories/dateprizes-repository";
import { DatePrize } from "@prisma/client";

interface ListRegisteredDatePrizesResponse {
    datePrizes: DatePrize[]
}

export class ListRegisterdDatePrizes{
    constructor(private datePrizesRepository: DatePrizeRepository){}

    async execute({ awarded } : {awarded?: string}): Promise<ListRegisteredDatePrizesResponse>{
        let datePrizes
        if(awarded){
            console.log('not awarded')
            datePrizes = await this.datePrizesRepository.findAllNotAwarded()
        } else {
            console.log('sem filtro')
            datePrizes = await this.datePrizesRepository.findAll()
        }  

        return {
            datePrizes: datePrizes
        }
    }
}