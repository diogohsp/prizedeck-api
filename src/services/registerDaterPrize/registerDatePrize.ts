import { DatePrizeRepository } from "@/repositories/dateprizes-repository";
import { DatePrizeAlreadyExistsError } from "../errors/dateprize-already-exists-error";

interface RegisterDatePrizeParams{
    dateHourPrize: Date
}

export class RegisterDatePrizeService{
    constructor (private datePrizeRepository: DatePrizeRepository){}

    async execute({ dateHourPrize }: RegisterDatePrizeParams){

        const sameDateHour = await this.datePrizeRepository.findByDate(dateHourPrize)

        if(sameDateHour){
            throw new DatePrizeAlreadyExistsError
        }

        const datePrize = await this.datePrizeRepository

    }
}