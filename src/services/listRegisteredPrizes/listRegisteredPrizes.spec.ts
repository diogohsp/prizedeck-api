import { beforeEach, describe, expect, it } from "vitest"
import { ListRegisterdPrizes } from "./listRegisteredPrizes"
import { InMemoryPrizeRepository } from "@/repositories/in-memory/in-memory-prize-repository"

describe('List Registered Prizes Service', () => {
    
    let prizeRepository: InMemoryPrizeRepository
    let sut: ListRegisterdPrizes

    beforeEach(() => {
        prizeRepository = new InMemoryPrizeRepository
        sut = new ListRegisterdPrizes(prizeRepository)
    })

    it('Should be possible to list the registered prizes', async() => {
        const { prizes } = await sut.execute()

        console.log(prizes)

        expect(Array.isArray(prizes)).toBe(true)
    })
})