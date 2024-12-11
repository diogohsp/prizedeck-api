import { Prize, Prisma } from "@prisma/client";
import { PrizesRepository } from "../prizes-repository";

export class InMemoryPrizeRepository implements PrizesRepository {

    public items: Prize[] = []

    async findById(id: string): Promise<Prize | null> {
        const prize = this.items.find(item => item.id === id)

        if(!prize){
            return null
        }

        return prize
    }
    async findByName(name: string): Promise<Prize | null> {
        const prize = this.items.find(item => item.name === name)

        if(!prize){
            return null
        }

        return prize
    }
    async registerPrize(data: Prisma.PrizeCreateInput): Promise<Prize> {

        const prize = {
            id: 'prize-1',
            name: data.name,
            quantity: data.quantity,
            code: 'teste',
        }

        this.items.push(prize)

        return prize
    }

}