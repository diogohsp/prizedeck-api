import { FastifyInstance } from 'fastify'
import { register } from './register/register-controller'
import { authenticate } from './authenticate/authenticate-controller'
import { refresh } from './refresh/refresh'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)
}
