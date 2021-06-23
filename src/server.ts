import 'dotenv/config'
import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import swaggerUi from 'swagger-ui-express'
import swaggerDocumment from './swagger'

import { routes } from './routes'
import { ensureAdmin } from './middlewares/ensureAdmin'
 
import './database'

const app = express()

app.use(express.json())

app.use("/api/v1", routes)

routes.use('/docs', ensureAdmin, swaggerUi.serve, swaggerUi.setup(swaggerDocumment))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({error: err.message})
  }
    return response.status(500).json({
      status: "Error",
      message: `Internal Server Error`
    })
})

app.listen(process.env.API_PORT, () => console.log(`server running on ${process.env.API_PORT}`))