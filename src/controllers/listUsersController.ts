import { Request, Response } from 'express'
import { listUsersService } from '../services/listUsersService'


class listUsersController {

  async handle( request: Request, response: Response){
    const listusers = new listUsersService()

    const users = listusers.execute()

    return response.json(users)
  }
}

export { listUsersController }