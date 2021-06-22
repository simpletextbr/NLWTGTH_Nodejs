import { Router } from "express"

import { createUserController } from './controllers/createUserController'

const routes = Router()

const createUser = new createUserController()

routes.post('/users', createUser.handle)


export { routes }