import { getCustomRepository } from 'typeorm'
import { tagsRepositories } from '../repositories/tagsRepositories'

interface ITagsRequest {
  name: string,
}

class createTagService {

  async execute({ name } : ITagsRequest){
    const tagsRepository = getCustomRepository(tagsRepositories);

    if(!name)
      throw new Error("you need type a name for your tag")

    const tagAlreadyExists = await tagsRepository.findOne({ name })

    if(tagAlreadyExists)
      throw new Error("The tag already exists")

      const tag = tagsRepository.create({
        name
      })
  
      await tagsRepository.save(tag)
      return tag
  }
}

export { createTagService } 