import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, it } from 'vitest'

describe('Register date prize (e2e)', () => {

    afterAll(async () => {
        await app.ready()
    })

    beforeAll(async () => {
        await app.close()
    })
    it('should be able to register a dateprize', () => {
        
    })
})
