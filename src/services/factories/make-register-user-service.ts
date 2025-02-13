import { ListRegisterdPrizes } from "../listRegisteredPrizes/listRegisteredPrizes";
import { PrismaUsersRepository } from "@/repositories/prisma-repositories/prisma-users-repository";
import { RegisterUserService } from "../registerUser/registerUser";

export function makeRegisterUserService(){
    const usersRepository = new PrismaUsersRepository
    const service = new RegisterUserService(usersRepository)

    return service
}