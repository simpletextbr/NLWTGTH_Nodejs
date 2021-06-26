import { getCustomRepository } from "typeorm"
import { tagsRepositories } from "../repositories/tagsRepositories"
import { classToPlain } from 'class-transformer'



class listTagsServices {

  async execute(){
    const tagsRepository = getCustomRepository(tagsRepositories)

    const tagsList = await tagsRepository.find()

    if(tagsList.length === 0){
      throw new Error("No tags found")
    }

    return classToPlain(tagsList)
  }

}

export { listTagsServices } 