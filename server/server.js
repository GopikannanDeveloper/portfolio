const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const homeRouter = require('../routes/home/home')

const PORT = 8080;
const app = express()
app.use(bodyParser.json())
app.use('api/',homeRouter)

mongoose.connect('mongodb://localhost:27017/portfolio')
.then(()=>{
    console.log("db connected !")
})
.catch((error)=>{
    console.log("error:",error)
})
app.listen(PORT)