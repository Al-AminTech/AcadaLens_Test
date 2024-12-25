import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import userRoute from './../Routes/userRoutes.ts'
import adminRoute from './../Routes/adminRoute.ts'
import babelRegister from '@babel/register'
import path from 'path'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()

babelRegister({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    });

app.use(express.static(path.join(__dirname, '../../app')));
app.use(express.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/user', userRoute)
app.use('/admin', adminRoute)

export default app