import { describe, expect, it } from "vitest";
import { RegisterDatePrizeService } from "./registerDatePrize";
import { InMemoryDatePrizeRepository } from "@/repositories/in-memory/in-memory-dateprize-repository";
import { beforeEach } from "node:test";

describe.only('Register Date Prize', () => {

    let datePrizeRepository: InMemoryDatePrizeRepository
    let sut: RegisterDatePrizeService

    beforeEach(() => {
        datePrizeRepository = new InMemoryDatePrizeRepository
        sut = new RegisterDatePrizeService(datePrizeRepository)
    })

    it('should be possible register a date prize', async  () => {

        const { datePrize } = await sut.execute({
            dateHourPrize: new Date(),
            prize: {
                code: '01'
            }
        })
        
        expect(datePrize.id).toEqual(expect.any(String))
        expect(datePrize.prize_code).toBe('1')
    })
})