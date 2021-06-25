import { Router } from "express"

import { createUserController } from './controllers/createUserController'
import { createTagController } from './controllers/createTagController'
import { createComplimentsController } from './controllers/createComplimentsController'
import { authenticateUserController } from './controllers/authenticateUserController'


import { ensureAdmin } from './middlewares/ensureAdmin'

const routes = Router()

const createUser = new createUserController()
const createTag = new createTagController()
const createSession = new authenticateUserController()
const createCompliment = new createComplimentsController()

routes.post('/users', createUser.handle)
routes.post('/tags', ensureAdmin, createTag.handle)
routes.post('/session', createSession.handle)
routes.post('/compliments', createCompliment.handle)

export { routes }