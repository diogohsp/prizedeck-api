import { DatePrizeRepository } from "@/repositories/dateprizes-repository";
import { DatePrizeAlreadyExistsError } from "../errors/dateprize-already-exists-error";

interface RegisterDatePrizeParams{
    dateHourPrize: Date
    prize: {
        code: String
    }
}

export class RegisterDatePrizeService{
    constructor (private datePrizeRepository: DatePrizeRepository){}

    async execute({ dateHourPrize, prize }: RegisterDatePrizeParams){

        const sameDateHour = await this.datePrizeRepository.findByDate(dateHourPrize)

        if(sameDateHour){
            throw new DatePrizeAlreadyExistsError
        }

        const datePrize = await this.datePrizeRepository.registerDatePrize({
            dateHourPrize,
            prize: {
                connect: {
                    code: "1"
                }
            }
        })

        return {
            datePrize
        }
    }
}