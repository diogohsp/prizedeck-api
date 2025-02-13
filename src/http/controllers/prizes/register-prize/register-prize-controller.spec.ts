import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAunthenticateUser } from '@/utils/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Register a prize (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register a prize', async () => {
        const { token } = await createAndAunthenticateUser(app, true)

        const response = await request(app.server)
        .post('/prizes')
        .set('Authorization', `Bearer ${token}`)
        .send({
                name: 'test',
                quantity: 1,
                code: 1
            })

        expect(response.statusCode).toEqual(201)
    })
})
