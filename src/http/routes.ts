import { FastifyInstance } from "fastify";
import { registerPrize } from './controllers/register-prize-controller'
import { helloWorld } from './controllers/hello-world-controller'
import { registerDatePrize } from "./controllers/register-dateprize-controller";
import { listRegisteredPrizes } from "./controllers/list-registered-prizes-controller";
import { listRegisteredDatePrizes } from "./controllers/list-registered-dateprizes-controller";
import { winPrize } from "./controllers/win-prize-controller";

export async function appRoutes (app: FastifyInstance){
    app.get('/', helloWorld),
    app.post('/prizes', registerPrize)
    app.post('/dateprizes', registerDatePrize)
    app.get('/prizes', listRegisteredPrizes)
    app.get('/dateprizes', listRegisteredDatePrizes)
    app.patch('/winprize', winPrize)
}