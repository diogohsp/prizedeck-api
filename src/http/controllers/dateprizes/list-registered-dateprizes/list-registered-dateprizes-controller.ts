import { makeListRegisteredDatePrizeService } from "@/services/factories/make-list-dateprizes-service"
import { FastifyReply, FastifyRequest } from "fastify"

interface QueryParams {
    awarded?: string
}

export async function listRegisteredDatePrizes(request: FastifyRequest, reply: FastifyReply){

    const { awarded } = request.query as QueryParams

    console.log('ASHD: ', request.query)

    try {
        const listRegisteredDatePrizesService = makeListRegisteredDatePrizeService()
        
        const {datePrizes} = await listRegisteredDatePrizesService.execute({
            awarded: awarded ? String(awarded) : undefined
        })

        return reply.status(200).send(datePrizes)
    } catch (error) {
        throw error
    }
}