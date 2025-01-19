import { PrizesRepository } from "@/repositories/prizes-repository"
import { PrizeAlreadyExistsError } from "../errors/prize-already-exists-error"
import { Prize } from "@prisma/client"

interface RegisterPrizeServiceParams{
    name: string
    quantity: number
}

interface RegisterPrizeServiceResponse{
    prize: Prize
}

export class RegisterPrizeService{

    constructor(private prizesRepository: PrizesRepository){}

    async execute({ name, quantity }: RegisterPrizeServiceParams): Promise<RegisterPrizeServiceResponse> {
    
        const prizeWithSameName = await this.prizesRepository.findByName(name)
    
        if(prizeWithSameName){
            throw new PrizeAlreadyExistsError
        }
    
        const prize = await this.prizesRepository.registerPrize({
            name,
            quantity
        })

        return {
            prize
        }
    }

}