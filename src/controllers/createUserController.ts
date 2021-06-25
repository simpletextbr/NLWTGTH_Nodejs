import { Request, Response } from 'express'
import { createUserService } from '../services/createUserService'


class createUserController {

  async handle( request: Request, response: Response){
    const { name, email, admin, password } = request.body

    const createUser = new createUserService();

    const user = await createUser.execute({name, email, admin, password});

    return response.json(user)
  }
}

export { createUserController }