import app from './App.ts'; // This requires `index.js` to have `export default app`
import dbConnection from './databaseServer.ts'
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const PORT = process.env.PORT
app.listen(PORT,()=> console.log('server is running'));

dbConnection.connect

