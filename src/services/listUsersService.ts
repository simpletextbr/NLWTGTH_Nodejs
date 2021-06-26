import { getCustomRepository } from "typeorm"
import { usersRepositories } from '../repositories/usersRepositories'
import { classToPlain } from 'class-transformer'



class listUsersService{

  async execute(){
    const userRepository = getCustomRepository(usersRepositories)

    const users = await userRepository.find()

    return classToPlain(users)
  }

}

export { listUsersService }