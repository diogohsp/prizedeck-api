import { DatePrize, Prisma } from "@prisma/client";
import { DatePrizeRepository } from "../dateprizes-repository";
import { connect } from "http2";

export class InMemoryDatePrizeRepository implements DatePrizeRepository{
    
    private items: DatePrize[] = []

    async findByDate(date: Date): Promise<DatePrize | null> {
        const datePrize = this.items.find(item => item.dateHourPrize === date)

        if(!datePrize){
            return null
        }

        return datePrize
    }

    async registerDatePrize(data: Prisma.DatePrizeCreateInput): Promise<DatePrize> {
        const datePrize = {
            id: 'dateprize-01',
            dateHourPrize: data.dateHourPrize,
            awarded: false,
            prize_code: '1', 
        }
    
        this.items.push(datePrize)
    
        return datePrize
    }
}