import { PrizesRepository } from "@/repositories/prizes-repository"
import { DatePrize, Prize } from "@prisma/client"
import { DatePrizeRepository } from "@/repositories/dateprizes-repository"
import { DatePrizeAlreadyAwardedError } from "../errors/prize-already-awarded"

interface WinPrizeParams{
    prize_id: string
}

interface WinPrizeResponse{
    datePrize: DatePrize | null
}

export class WinPrize{

    constructor(private datePrizesRepository: DatePrizeRepository){}

    async execute({ prize_id }: WinPrizeParams): Promise<WinPrizeResponse> {
    
        const prizeAwarded = await this.datePrizesRepository.findPrizeAwarded(prize_id) 
        if(prizeAwarded){
            throw new DatePrizeAlreadyAwardedError
        }
    
        const datePrize = await this.datePrizesRepository.winPrize(prize_id) 

        return {
            datePrize
        }
    }

}