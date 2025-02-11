import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { PrizeAlreadyExistsError } from '@/services/errors/prize-already-exists-error'
import { makeRegisterPrizeService } from '@/services/factories/make-registerprize-service'

export async function registerPrize(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema =  z.object({
        name: z.string(),
        quantity: z.number().min(1)
    })

    const {name, quantity} = registerBodySchema.parse(request.body)

    try {
        const registerPrizeService = makeRegisterPrizeService()

        await registerPrizeService.execute({ name, quantity })
    } catch (error) {

        if(error instanceof PrizeAlreadyExistsError){
            return reply.status(409).send({ message: error.message })
        }

        throw error
    }

    return reply.status(201).send()
}