import { Router } from "express"

import { createUserController } from './controllers/createUserController'
import { createTagController } from './controllers/createTagController'


import { ensureAdmin } from './middlewares/ensureAdmin'

const routes = Router()

const createUser = new createUserController()
const createTag = new createTagController()

routes.post('/users', createUser.handle)
routes.post('/tags', ensureAdmin, createTag.handle)


export { routes }