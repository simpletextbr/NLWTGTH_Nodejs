
import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { usersRepositories } from '../repositories/usersRepositories'

interface ISessionAuth{
  email: string,
  password: string,
}

class authenticateUserService {

  async execute({ email, password }: ISessionAuth){
    const userRepository = getCustomRepository(usersRepositories)

    const user = await userRepository.findOne({ email })

    if(!user){
      throw new Error("Email/Password incorrect")
    }

    const validate = await compare(password, user.password)

    if(!validate){
      throw new Error("Email/Password incorrect")
    }

    const token  = sign({
      email: user.email,
    }, process.env.API_JWT_SECRET, {
      subject: user.id,
      expiresIn: process.env.API_JWT_EXPIRATION
    })

    return token

  }

}

export { authenticateUserService }