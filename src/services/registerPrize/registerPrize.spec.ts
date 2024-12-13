import { expect, describe, it, test, vi, beforeAll } from 'vitest'
import { RegisterPrizeService } from './registerPrize'
import { InMemoryPrizeRepository } from '@/repositories/in-memory/in-memory-prize-repository'
import { PrizeAlreadyExistsError } from '../errors/prize-already-exists-error'
import { beforeEach } from 'node:test'

// test('check if it works', () => {
//     expect(2 + 2).toBe(4)
// })

describe('Register Prize Service', () => {
    
    let prizeRepository: InMemoryPrizeRepository
    let sut: RegisterPrizeService

    beforeEach(() => {
        prizeRepository = new InMemoryPrizeRepository
        sut = new RegisterPrizeService(prizeRepository)

        vi.useFakeTimers()
    })

    beforeEach(() => {
        vi.useRealTimers()
    })

    it('should be possible register a prize', async () => {

        const { prize } = await sut.execute({
            name:'teste',
            quantity: 1,
            code: '1'
        })

        expect(prize.id).toEqual(expect.any(String))
        expect(prize.name).toBe('teste')
    })

    it('should not be possible register two prizes with the same name', async () => {
        const inMemoryDatabase = new InMemoryPrizeRepository
        const registerPrizeUseCase = new RegisterPrizeService(inMemoryDatabase)

        const { prize } = await registerPrizeUseCase.execute({
            name:'teste',
            quantity: 1,
            code: '2'
        })

        expect(async () => await registerPrizeUseCase.execute({
            name:'teste',
            quantity: 1,
            code: '3'
        })).rejects.toBeInstanceOf(PrizeAlreadyExistsError)
    })

})