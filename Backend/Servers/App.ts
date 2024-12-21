import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './../Routes/userRoutes.ts'
import landingPage from './../Routes/landingpageRoute.ts'
import adminRoute from './../Routes/adminRoute.ts'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('', landingPage )
app.use('/user', userRoute)
app.use('/admin', adminRoute)

export default app