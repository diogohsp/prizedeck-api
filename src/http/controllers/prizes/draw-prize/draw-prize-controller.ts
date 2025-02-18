import { DatePrizeAlreadyAwardedError } from "@/services/errors/prize-already-awarded";
import { makeDrawPrizeService } from "@/services/factories/make-draw-prize-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function drawPrize(request: FastifyRequest, reply: FastifyReply){
    const drawPrizeBodySchema = z.object({
        id: z.string()
    })

    const { id } = drawPrizeBodySchema.parse(request.body)
    
    try {
        const drawPrizeService = makeDrawPrizeService()

        await drawPrizeService.execute({ prize_id: id })

        return reply.status(200).send()
    } catch (error) {

        if(error instanceof DatePrizeAlreadyAwardedError){
            return reply.status(409).send({ message: error.message })
        }

        throw error
    }

}   