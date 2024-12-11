import { DatePrize, Prisma } from "@prisma/client";
import { DatePrizeRepository } from "../dateprizes-repository";
import { prisma } from "@/lib/prisma";

export class PrismaDatePrizeRepository implements DatePrizeRepository{
    async registerDatePrize(data: Prisma.DatePrizeCreateInput): Promise<DatePrize> {
        const prizeDate = await prisma.datePrize.create({
            data: data
        })

        return prizeDate
    }
    async findByDate(date: Date): Promise<DatePrize | null> {
        const prizeDate = await prisma.datePrize.findUnique({
            where: {
                dateHourPrize: date
            }
        })
        return prizeDate
    }

}