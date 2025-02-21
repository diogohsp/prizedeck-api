import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import fastifyCors from "@fastify/cors";
import { prizesRoutes } from "./http/controllers/prizes/routes";
import { datePrizesRoutes } from "./http/controllers/dateprizes/routes";
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { userRoutes } from "./http/controllers/users/routes";

export const app = fastify()

app.register(fastifyCors, {
    origin: '*',
    credentials: true,
});

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
      cookieName: 'refreshToken',
      signed: false,
    },
    sign: {
      expiresIn: '10h',
    },
  })
  
app.register(fastifyCookie)

app.register(userRoutes)
app.register(prizesRoutes)
app.register(datePrizesRoutes)

app.setErrorHandler((error, _, reply) => {
    if(error instanceof ZodError){
        return reply.status(400).send({message: 'Validation error.', issues: error.format()})
    }

    if(env.NODE_ENV !== 'production'){
        console.log(error)
    } else {
        //TODO: here we should log to an external tool
    }

    return reply.status(500).send({message: 'Internal server error!'})
})