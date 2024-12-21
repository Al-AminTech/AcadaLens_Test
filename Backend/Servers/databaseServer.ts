import {Pool} from 'pg'
import dotenv from 'dotenv'
dotenv.config({path: './config.env'})


const con = new Pool({
    host        : process.env.DB_HOSTNAME,
    user        : process.env.DB_USER,
    port        :  Number(process.env.DB_PORT),
    password    : process.env.DB_PASSWORD,
    database    : process.env.DB_DATABASE

})

con.connect().then(()=>{
    console.log('pg connected succesfully')
}).catch((e:any)=> console.log)

export default con