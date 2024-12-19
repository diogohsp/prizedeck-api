import { DatePrize, Prisma } from "@prisma/client";

export interface DatePrizeRepository{
    findAll():Promise<DatePrize[]>
    findByDate(date: Date | String): Promise<DatePrize | null>
    registerDatePrize(datePrize: Prisma.DatePrizeCreateInput): Promise<DatePrize>
    findAllNotAwarded(): Promise<DatePrize[]>
    findPrizeAwarded(id: string): Promise <DatePrize | null>
    winPrize(id: string): Promise<DatePrize | null>
}