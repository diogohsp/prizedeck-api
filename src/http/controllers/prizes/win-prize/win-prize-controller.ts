import { DatePrizeAlreadyAwardedError } from "@/services/errors/prize-already-awarded";
import { makeWinPrizeService } from "@/services/factories/make-win-prize-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function winPrize(request: FastifyRequest, reply: FastifyReply){
    const winPrizeBodySchema = z.object({
        id: z.string()
    })

    const { id } = winPrizeBodySchema.parse(request.body)
    
    try {
        const winPrizeService = makeWinPrizeService()

        await winPrizeService.execute({ prize_id: id })

        return reply.status(200).send()
    } catch (error) {

        if(error instanceof DatePrizeAlreadyAwardedError){
            return reply.status(409).send({ message: error.message })
        }

        throw error
    }

}   