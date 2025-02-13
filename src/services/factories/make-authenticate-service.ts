import { ListRegisterdPrizes } from "../listRegisteredPrizes/listRegisteredPrizes";
import { PrismaUsersRepository } from "@/repositories/prisma-repositories/prisma-users-repository";
import { RegisterUserService } from "../registerUser/registerUser";
import { AuthenticateService } from "../authenticate/authenticate";

export function makeAuthenticateService(){
    const usersRepository = new PrismaUsersRepository
    const service = new AuthenticateService(usersRepository)

    return service
}