import { FastifyInstance } from "fastify";
import { registerPrize } from './controllers/register-prize-controller'
import { helloWorld } from './controllers/hello-world-controller'

export async function appRoutes (app: FastifyInstance){
    app.get('/', helloWorld),
    app.post('/prizes', registerPrize)
}