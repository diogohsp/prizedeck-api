import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'
import { makeRegisterUserService } from '@/services/factories/make-register-user-service'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body) // unlike safeparse, parse will give an automatic launch if validation fails

  try {
    const registerUserCase = makeRegisterUserService()

    await registerUserCase.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error // this way we leave ourselves a layer above the current one to deal with the error
  }

  return reply.status(201).send()
}
