import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
// import { errorHandler } from './libs/errorHandler'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'))

export { app }
