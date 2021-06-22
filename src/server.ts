import 'dotenv/config'
import express from 'express'

const app = express()

app.listen(process.env.API_PORT, () => console.log(`server running on ${process.env.API_PORT}`))