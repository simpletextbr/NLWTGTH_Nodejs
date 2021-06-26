import { Request, Response } from 'express'
import { listComplimentsReceivedService } from '../services/listComplimentsReceivedService'


class listComplimentsReceivedController {
  async handle( request: Request, response: Response){
    const { user_id } = request
    const listUserReceived = new listComplimentsReceivedService()

    const compliments = await listUserReceived.execute(user_id)

    return response.json(compliments)
  }
}

export { listComplimentsReceivedController }