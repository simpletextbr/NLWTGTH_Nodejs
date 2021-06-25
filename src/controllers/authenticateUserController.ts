import { Request, Response} from 'express'
import { authenticateUserService } from '../services/authenticateUserService'


class authenticateUserController {

  async handle(request: Request, response: Response){
    const { email, password } = request.body

    const sessionUser = new authenticateUserService()

    const token = await sessionUser.execute({email, password})

    return response.json(token)
  }

}

export { authenticateUserController }