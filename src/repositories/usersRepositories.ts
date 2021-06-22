import { EntityRepository, Repository } from 'typeorm'
import { user } from '../entities/user'

@EntityRepository(user)
class usersRepositories extends Repository<user>{

}

export { usersRepositories }