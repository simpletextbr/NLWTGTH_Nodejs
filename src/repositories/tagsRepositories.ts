import { EntityRepository, Repository } from 'typeorm'
import { tag } from '../entities/tag'

@EntityRepository(tag)
class tagsRepositories extends Repository<tag>{

}

export { tagsRepositories }