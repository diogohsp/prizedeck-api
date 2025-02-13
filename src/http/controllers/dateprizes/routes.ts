import { FastifyInstance } from "fastify";
import { registerDatePrize } from "./register-dateprize/register-dateprize-controller";
import { listRegisteredDatePrizes } from "./list-registered-dateprizes/list-registered-dateprizes-controller";
import { verifyUserRole } from "@/http/middlewares/verify-user-role";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export async function datePrizesRoutes(app: FastifyInstance){
    app.addHook('onRequest', verifyJWT)

    app.post('/dateprizes', {onRequest: [verifyUserRole('ADMIN')]}, registerDatePrize)
    app.get('/dateprizes', listRegisteredDatePrizes)

}