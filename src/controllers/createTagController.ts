import { Request, Response } from 'express'
import { createTagService } from '../services/createTagService'


class createTagController {

  async handle( request: Request, response: Response){
    const { name } = request.body

    const createTag = new createTagService();

    const tag = await createTag.execute({name})

    return response.json(tag)
  }
}

export { createTagController }