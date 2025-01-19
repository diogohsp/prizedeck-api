import { DatePrizeAlreadyExistsError } from "@/services/errors/dateprize-already-exists-error";
import { makeRegisterDatePrizeService } from "@/services/factories/make-registerdateprize-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function registerDatePrize(request: FastifyRequest, reply: FastifyReply){
    const registerDatePrizeBodySchema = z.object({
        dateHourPrize: z.union([z.string(), z.date()]),
        prize: z.object({
            code: z.number().min(1, 'The code of prize is mandatory!'),
        }),
    })

    const { dateHourPrize, prize } = registerDatePrizeBodySchema.parse(request.body)

    try {
        const registerDatePrizeService = makeRegisterDatePrizeService()

        await registerDatePrizeService.execute({dateHourPrize, prize})
    } catch (error) {
        if (error instanceof DatePrizeAlreadyExistsError){
            return reply.status(409).send({message: error.message})
        }
        throw error
    }

    return reply.status(201).send()
}