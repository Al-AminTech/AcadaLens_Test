import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './../Routes/userRoutes.ts'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/', userRoute)
export default app