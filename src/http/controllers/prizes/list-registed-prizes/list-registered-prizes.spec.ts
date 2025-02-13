import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { createAndAunthenticateUser } from '@/utils/create-and-authenticate-user'

describe('List Registereds prizes (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it.only('should be able to list registereds a dateprize', async () => {
        const { token } = await createAndAunthenticateUser(app)

        const response = await request(app.server).get('/prizes').set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toEqual(200)
    })
})
