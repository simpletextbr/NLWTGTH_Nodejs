import { getCustomRepository } from 'typeorm'
import { usersRepositories } from '../repositories/usersRepositories'

interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean
}

class createUserService {

  async execute({ name, email, admin } : IUserRequest){
    const usersRepository = getCustomRepository(usersRepositories)

    if(!email)
      throw new Error("you need write your email")

    const userAlreadyExists = await usersRepository.findOne({ email })

    if(userAlreadyExists){
      throw new Error(`User ${userAlreadyExists.name} already exists`)
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    })

    await usersRepository.save(user)

    return user
  }
}

export { createUserService } 