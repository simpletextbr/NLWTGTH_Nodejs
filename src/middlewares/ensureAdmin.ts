import { Request, Response, NextFunction} from 'express'
import { getCustomRepository } from 'typeorm';
import { usersRepositories  } from '../repositories/usersRepositories'


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  const { user_id }  = request
  const userRepository = getCustomRepository(usersRepositories)

  const { admin } = await userRepository.findOne(user_id)

  if(admin){
    return next();
  }

  return response.status(401).json({error: "Your user is Unauthorized"})
}