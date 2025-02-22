import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAunthenticateUser } from '@/utils/create-and-authenticate-user'
import { prisma } from '@/lib/prisma'

describe('Register date prize (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register a dateprize', async () => {
        const { token } = await createAndAunthenticateUser(app, true)

        await prisma.prize.create({
            data: {
                name: 'test',
                quantity: 1,
                code: 1
            }
        })

        const response = await request(app.server)
        .post('/dateprizes')
        .set('Authorization', `Bearer ${token}`)
        .send({
            dateHourPrize: "2025-10-10T08:00:00.000Z",
            prize: {
              code: 1
            }
          }
          )

        expect(response.statusCode).toEqual(201)
    })
})
