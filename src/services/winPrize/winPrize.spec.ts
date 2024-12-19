import { InMemoryDatePrizeRepository } from "@/repositories/in-memory/in-memory-dateprize-repository";
import { InMemoryPrizeRepository } from "@/repositories/in-memory/in-memory-prize-repository";
import { beforeEach, describe, expect, it } from "vitest";
import { WinPrize } from "./winPrize";

describe('Win Prize Service', () => {

    let datePrizeRepository: InMemoryDatePrizeRepository
    let sut: WinPrize

    beforeEach(() => {
        datePrizeRepository = new InMemoryDatePrizeRepository
        sut = new WinPrize(datePrizeRepository)
    })

    it('Should be possible to win a prize', async () => {
        
        datePrizeRepository.items.push(
            {
                id: '123123123',
                prize_code: '01',
                dateHourPrize: new Date('2024-12-16T00:00:00.000Z'),
                awarded: false
            }
        )

        const prize = await sut.execute({prize_id: '123123123'})

        console.log(prize)

        expect(prize.datePrize?.awarded).toBe(true)

    })
})