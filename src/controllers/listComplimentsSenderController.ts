import { Request, Response} from 'express'
import { listComplimentsSenderService } from "../services/listComplimentsSenderService"



class listComplimentsSenderController{
  async handle( request: Request, response: Response){
    const { user_id } = request
    const listUserSend = new listComplimentsSenderService()

    const compliments = await listUserSend.execute(user_id)

    return response.json(compliments)
  }
}

export { listComplimentsSenderController }