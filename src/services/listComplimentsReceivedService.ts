import { getCustomRepository } from "typeorm"
import { complimentsRepositories } from "../repositories/complimentsRepositories"

class listComplimentsReceivedService {

  async execute(user_id: string){
    const complimentsRepository = getCustomRepository(complimentsRepositories)

    const compliments = await complimentsRepository.find({ 
      where:{
         user_receiver: user_id
      },
      relations: ["userSender", "tag"]
    })

    if(compliments.length === 0){
      throw new Error("User Does not received any compliments")
    }

    return compliments
  }

}

export { listComplimentsReceivedService }