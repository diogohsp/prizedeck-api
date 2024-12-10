import { PrizesRepository } from "@/repositories/prizes-repository"
import { PrizeAlreadyExistsError } from "./errors/prize-already-exists-error"

interface RegisterPrizeServiceParams{
    name: string
    quantity: number
}

export class RegisterPrizeService{

    constructor(private prizesRepository: PrizesRepository){}

    async execute({ name, quantity }: RegisterPrizeServiceParams) {
    
        const prizeWithSameName = await this.prizesRepository.findByName(name)
    
        if(prizeWithSameName){
            throw new PrizeAlreadyExistsError
        }
    
        await this.prizesRepository.registerPrize({
            name,
            quantity
        })
    }

}