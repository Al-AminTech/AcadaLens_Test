import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('', ()=>{
    console.log('hello world')
})

export default app