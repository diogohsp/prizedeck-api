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

    it('should be able to win a prize', async () => {
        const { token } = await createAndAunthenticateUser(app, true)

        await prisma.prize.create({
            data: {
                name: 'test',
                quantity: 1,
                id: '1',
            }
        })

        await prisma.datePrize.create({
            data: {
                id: '1',
                prize_code: 1,
                dateHourPrize: new Date('2024-12-16T00:00:00.000Z'),
                awarded: false 
            }
        })

        const response = await request(app.server)
        .patch('/winprize')
        .set('Authorization', `Bearer ${token}`)
        .send({
                id: '1'
            })

        console.log('response: ', JSON.stringify(response, null, 2))

        expect(response.statusCode).toEqual(200)
    })
})
