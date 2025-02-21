import { Prize, Prisma } from "@prisma/client";

export interface PrizesRepository {
    findPrizeCode(code: number): Promise<Prize | null>;
    findById(id: string): Promise<Prize | null>
    findByName(name: string): Promise<Prize | null>
    registerPrize(data: Prisma.PrizeCreateInput): Promise<Prize>
    findAll(): Promise<Prize[]>
}