import { FastifyInstance } from "fastify";
import { registerPrize } from "./register-prize/register-prize-controller";
import { listRegisteredPrizes } from "./list-registed-prizes/list-registered-prizes-controller";
import { winPrize } from "./win-prize/win-prize-controller";
import { helloWorld } from "../hello-world-controller";
    
export async function prizesRoutes(app: FastifyInstance){

    app.get('/', helloWorld)

    app.post('/prizes', registerPrize)
    app.get('/prizes', listRegisteredPrizes)
    app.patch('/winprize', winPrize)
    
}