import { makeListRegisteredDatePrizeService } from "@/services/factories/make-list-dateprizes-service"
import { FastifyReply, FastifyRequest } from "fastify"

export async function listRegisteredDatePrizes(request: FastifyRequest, reply: FastifyReply){
    try {
        const listRegisteredDatePrizesService = makeListRegisteredDatePrizeService()
        
        const {datePrizes} = await listRegisteredDatePrizesService.execute()

        return reply.status(200).send(datePrizes)
    } catch (error) {
        throw error
    }
}