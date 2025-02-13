import { UsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from '../errors/user-already-exists-error'
import { User } from '@prisma/client'
import bcrypt from 'bcryptjs'


interface RegisterServiceRequest {
    name: string
    email: string
    password: string
}

interface RegisterServiceResponse {
    user: User
}

export class RegisterUserService{
    constructor(private usersRepository: UsersRepository){}

    async execute({ email, name, password }: RegisterServiceRequest): Promise<RegisterServiceResponse>{
    const password_hash = await bcrypt.hash(password, 6)

    const useWithSameEmail = await this.usersRepository.findByEmail(email)

    if (useWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return {
      user,
    }
    }
}
  