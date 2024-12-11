import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { RegisterPrizeService } from '@/services/registerPrize'
import { PrismaPrizeRepository } from '@/repositories/prisma-repositories/prisma-prizes-repository'
import { PrizeAlreadyExistsError } from '@/services/errors/prize-already-exists-error'

export async function registerPrize(request: FastifyRequest, reply: FastifyReply){
    const registerBodySchema =  z.object({
        name: z.string(),
        quantity: z.number().min(1)
    })

    const {name, quantity} = registerBodySchema.parse(request.body)

    try {
        const prismaPrizeRepository = new PrismaPrizeRepository
        const registerService = new RegisterPrizeService(prismaPrizeRepository)

        await registerService.execute({ name, quantity })
    } catch (error) {

        if(error instanceof PrizeAlreadyExistsError){
            return reply.status(409).send({ message: error.message })
        }

        throw error
    }

    return reply.status(201).send()
}