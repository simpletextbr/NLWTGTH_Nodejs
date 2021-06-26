import { getCustomRepository } from "typeorm"
import { complimentsRepositories } from "../repositories/complimentsRepositories"

class listComplimentsSenderService {

  async execute(user_id: string){
    const complimentsRepository = getCustomRepository(complimentsRepositories)

    const compliments = await complimentsRepository.find({ 
      where:{
         user_sender: user_id
      },
      relations: ["userReceiver", "tag"]
    })

    if(compliments.length === 0){
      throw new Error("This user never send any compliments")
    }

    return compliments
  }

}

export { listComplimentsSenderService }
