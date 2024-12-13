import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { RegisterDatePrizeService } from "./registerDatePrize";
import { InMemoryDatePrizeRepository } from "@/repositories/in-memory/in-memory-dateprize-repository";

describe.only('Register Date Prize', () => {

    let datePrizeRepository: InMemoryDatePrizeRepository
    let sut: RegisterDatePrizeService

    beforeEach(() => {
        datePrizeRepository = new InMemoryDatePrizeRepository
        sut = new RegisterDatePrizeService(datePrizeRepository)

        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('should be possible register a date prize', async  () => {

        const date = new Date(2024, 9, 10,8,0,0)
        vi.setSystemTime(date)

        const { datePrize } = await sut.execute({
            dateHourPrize: date,
            prize: {
                code: '01'
            }
        })
        
        expect(datePrize.id).toEqual(expect.any(String))
        expect(datePrize.prize_code).toBe('1')
    })
})