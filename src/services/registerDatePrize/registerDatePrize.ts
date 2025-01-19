import { DatePrizeRepository } from "@/repositories/dateprizes-repository";
import { DatePrizeAlreadyExistsError } from "../errors/dateprize-already-exists-error";

interface RegisterDatePrizeParams{
    dateHourPrize: Date | string
    prize: {
        code: number
    }
}

export class RegisterDatePrizeService{
    constructor (private datePrizeRepository: DatePrizeRepository){}

    async execute({ dateHourPrize, prize }: RegisterDatePrizeParams){

        const dateHour = new Date(dateHourPrize)

        const sameDateHour = await this.datePrizeRepository.findByDate(dateHourPrize)

        if(sameDateHour){
            throw new DatePrizeAlreadyExistsError
        }

        const datePrize = await this.datePrizeRepository.registerDatePrize({
            dateHourPrize,
            prize: {
                connect: {
                    code: prize.code
                }
            }
        })

        return {
            datePrize
        }
    }
}