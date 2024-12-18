import { InMemoryDatePrizeRepository } from "@/repositories/in-memory/in-memory-dateprize-repository"
import { beforeEach, describe, expect, it } from "vitest"
import { ListRegisterdDatePrizes } from "./listRegisteredDatePrizes"

describe('Should be possible list the registered date prizes', () => {
    let prizeRepository: InMemoryDatePrizeRepository
    let sut: ListRegisterdDatePrizes

    beforeEach(() => {
        prizeRepository = new InMemoryDatePrizeRepository
        sut = new ListRegisterdDatePrizes(prizeRepository)
    })

    it('Should be possible to list the registered prizes', async() => {
        const { datePrizes } = await sut.execute()

        console.log(datePrizes)

        expect(Array.isArray(datePrizes)).toBe(true)
    })
})