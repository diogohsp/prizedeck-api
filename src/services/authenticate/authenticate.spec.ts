/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-use-before-define */
import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateService } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from '../errors/invalid-credentials-errors'

// Unit test
let usersRepository: InMemoryUsersRepository
let sut: AuthenticateService
describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateService(usersRepository) // System Under Test
  })
  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'johndoe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with wrong password', async () => {
    await usersRepository.create({
      name: 'johndoe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    await expect(() =>
      sut.execute({
        email: 'johndoe@example.com',
        password: '123456ABC',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
