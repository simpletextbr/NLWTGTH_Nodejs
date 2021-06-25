import { EntityRepository, Repository } from 'typeorm'
import { compliment } from '../entities/compliment'

@EntityRepository(compliment)
class complimentsRepositories extends Repository<compliment>{

}

export { complimentsRepositories }