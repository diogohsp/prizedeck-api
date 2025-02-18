import { PrizesRepository } from "@/repositories/prizes-repository"
import { DatePrize, Prize } from "@prisma/client"
import { DatePrizeRepository } from "@/repositories/dateprizes-repository"
import { DatePrizeAlreadyAwardedError } from "../errors/prize-already-awarded"

interface DrawPrizeParams{
    prize_id: string
}

export interface DrawPrizeResponse{
    datePrize: DatePrize | null
}

export class DrawPrizeService{

    constructor(private datePrizesRepository: DatePrizeRepository){}

    async execute({ prize_id }: DrawPrizeParams): Promise<DrawPrizeResponse | null> {
        
        const prizesList = await this.datePrizesRepository.findAll

        const randomNumberOneToTen = Math.floor(Math.random() * 9) + 1

        console.log('numero aleatorio: ', randomNumberOneToTen)

        if(randomNumberOneToTen % 2 === 0){

            const prizeAwarded = await this.datePrizesRepository.findPrizeAwarded(prize_id)
         
            if(prizeAwarded){
                throw new DatePrizeAlreadyAwardedError
            }

            const datePrize = await this.datePrizesRepository.winPrize(prize_id) 

            return {
                datePrize
            }
        } else {
            return null
        }
    }

}