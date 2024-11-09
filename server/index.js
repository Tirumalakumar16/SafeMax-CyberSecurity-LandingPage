const express = require('express')

const app = express()
require("dotenv").config();
const userRoutes = require('./routes/User')

const cookieParser = require('cookie-parser')
const {PORT}  = require('./config/Constants')

const {connectDb} = require('./config/config')

connectDb().then(()=>{
        console.log("Connected to MongoDb");
}).catch((err)=>{
        console.log("Error while connecting to database : ",err);
})

app.use(express.urlencoded())
app.use(express.json())

app.use(cookieParser())



app.use('/api/user',userRoutes) 

app.listen(PORT,()=>{
        console.log("Server started on Port Number : ",PORT);
}) 