import { FastifyInstance } from "fastify";
import { registerDatePrize } from "./register-dateprize/register-dateprize-controller";
import { listRegisteredDatePrizes } from "./list-registered-dateprizes/list-registered-dateprizes-controller";

export async function datePrizesRoutes(app: FastifyInstance){

    app.post('/dateprizes', registerDatePrize)
    app.get('/dateprizes', listRegisteredDatePrizes)

}