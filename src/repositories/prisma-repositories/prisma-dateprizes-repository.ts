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

    async findAll(): Promise<DatePrize[]> {
        const allItems = await prisma.datePrize.findMany({
            orderBy: {
                dateHourPrize: "asc"
            }
        })

        return allItems
    }

    async findAllNotAwarded(): Promise<DatePrize[]> {
        const allNotAwarded = await prisma.datePrize.findMany({
            where: {
                awarded: false
            }
        })

        return allNotAwarded
    }

    async findPrizeAwarded(id: string): Promise<DatePrize | null> {
        const prizeAwarded = await prisma.datePrize.findUnique({
            where:{
                id: id,
                awarded: true,
            },
        })

        return prizeAwarded
    }
    
    async winPrize(id: string): Promise<DatePrize> {
        const prizeWon = await prisma.datePrize.update({
            where: {
                id: id
            },
            data: {
                awarded: true
            }
        })

        return prizeWon
    }

}