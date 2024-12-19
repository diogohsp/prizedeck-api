import { makeListRegisteredPrizeService } from "@/services/factories/make-list-prize-service";
import { FastifyReply, FastifyRequest } from "fastify";

export async function listRegisteredPrizes(request: FastifyRequest, reply: FastifyReply){
    try {
        const listRegisteredPrizesService = makeListRegisteredPrizeService()
        
        const { prizes } = await listRegisteredPrizesService.execute()

        return reply.status(200).send(prizes)
    } catch (error) {
        throw error
    }
}