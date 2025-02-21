import { PrizesRepository } from "@/repositories/prizes-repository"
import { DatePrize, Prize } from "@prisma/client"
import { DatePrizeRepository } from "@/repositories/dateprizes-repository"
import { DatePrizeAlreadyAwardedError } from "../errors/prize-already-awarded"

interface DrawPrizeParams{
    prize_id: string
}

export interface DrawPrizeResponse{
    datePrize: DatePrize | null
    prize: Prize
}

export class DrawPrizeService{

    constructor(private datePrizesRepository: DatePrizeRepository, private prizesRepository: PrizesRepository){}

    async execute({ prize_id }: DrawPrizeParams): Promise<DrawPrizeResponse | null> {

        console.log('ID QUE CHEGOU: ', prize_id)
        
        // const prizesList = await this.datePrizesRepository.findAll

        const randomNumberOneToTen = Math.floor(Math.random() * 9) + 1

        console.log('numero aleatorio: ', randomNumberOneToTen)

        if(randomNumberOneToTen % 2 === 0){

            const prizeAwarded = await this.datePrizesRepository.findPrizeAwarded(prize_id)
         
            if(prizeAwarded?.awarded){
                console.log('cai no erro')
                throw new DatePrizeAlreadyAwardedError()
            }

            const datePrize = await this.datePrizesRepository.winPrize(prize_id)

            const prize = await this.prizesRepository.findPrizeCode(datePrize!.prize_code);

            console.log('ganhei: ', datePrize)

            if(prize){
                return {
                    datePrize, prize
                }
            }

            return null
        } else {
            return null
        }
    }

}