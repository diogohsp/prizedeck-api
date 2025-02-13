import { User, Prisma } from '@prisma/client'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository implements UsersRepository {
  
  public recordsInDataBase: User[] = []

  async findById(id: string) {
    const user = this.recordsInDataBase.find((record) => record.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string) {
    const user = this.recordsInDataBase.find((record) => record.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data: Prisma.UserCreateInput){
    const user = {
        id: randomUUID(),
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
        role: data.role ?? 'USER',
        created_at: new Date(),
      }
  
      this.recordsInDataBase.push(user)
      return user
    }
}
