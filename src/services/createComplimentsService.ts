import { getCustomRepository } from "typeorm"
import { complimentsRepositories } from "../repositories/complimentsRepositories"
import { usersRepositories } from "../repositories/usersRepositories"

interface IComplimentsRequest{
  tag_id: string,
  user_sender: string,
  user_receiver: string,
  message: string
}

class createComplimentsService {

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentsRequest){
    const complimentRepository = getCustomRepository(complimentsRepositories)
    const userRepository = getCustomRepository(usersRepositories)

    if(user_sender === user_receiver){
      throw new Error("You can't do compliments for yourself")
    }

    const userReceiveExists = await userRepository.findOne(user_receiver)

    if(!userReceiveExists){
      throw new Error("User receiver does not exits")
    }

    const compliment = complimentRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentRepository.save(compliment)

    return compliment

  }
}

export { createComplimentsService }