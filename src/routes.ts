import { Router } from "express"

import { createUserController } from './controllers/createUserController'
import { createTagController } from './controllers/createTagController'
import { createComplimentsController } from './controllers/createComplimentsController'
import { authenticateUserController } from './controllers/authenticateUserController'
import { listComplimentsReceivedController } from "./controllers/listComplimentsReceivedController"
import { listComplimentsSenderController } from "./controllers/listComplimentsSenderController"
import { listTagsController } from "./controllers/listTagsController"
import { listUsersController } from "./controllers/listUsersController"


import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuth } from './middlewares/ensureAuth'


const routes = Router()

const createUser = new createUserController()
const createTag = new createTagController()
const createSession = new authenticateUserController()
const createCompliment = new createComplimentsController()
const listComplimentsReceived = new listComplimentsReceivedController()
const listComplimentsSender = new listComplimentsSenderController()
const listTags = new listTagsController()
const listUsers = new listUsersController()

routes.post('/session', createSession.handle)

routes.post('/users', createUser.handle)
routes.get('/users', ensureAuth, listUsers.handle)

routes.post('/tags', ensureAuth, ensureAdmin, createTag.handle)
routes.get('/tags', ensureAuth, listTags.handle)

routes.post('/compliments', ensureAuth, createCompliment.handle)
routes.get('/compliments/send', ensureAuth, listComplimentsSender.handle)
routes.get('/compliments/receive', ensureAuth, listComplimentsReceived.handle)






export { routes }