import { describe, expect, it } from "vitest";
import { RegisterDatePrizeService } from "./registerDatePrize";
import { InMemoryDatePrizeRepository } from "@/repositories/in-memory/in-memory-dateprize-repository";

describe.only('Register Date Prize', () => {
    it('should be possible register a date prize', async  () => {
        const inMemoryDatabase = new InMemoryDatePrizeRepository
        const registerDatePrizeService = new RegisterDatePrizeService(inMemoryDatabase)

        const { datePrize } = await registerDatePrizeService.execute({
            dateHourPrize: new Date(),
            prize: {
                code: '01'
            }
        })
        
        expect(datePrize.id).toEqual(expect.any(String))
        expect(datePrize.prize_code).toBe('1')
    })
})