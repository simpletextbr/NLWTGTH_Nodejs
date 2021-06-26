import { Request, Response } from 'express'
import { listTagsServices } from '../services/listTagsService'


class listTagsController {
  async handle( request: Request, response: Response){
    const listTags = new listTagsServices()

    const  tags = listTags.execute()

    return response.json(tags)
  }
}

export { listTagsController }