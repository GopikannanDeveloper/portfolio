const mongoose = require('mongoose')

const homeShcema = new mongoose.Schema({
    name:{type:String},
    position:{type:String},
    prof_summary:{type:String},
    createdAt:{type:Date,default:Date.now()}
    updatedAt:{type:Date,default:Date.now()}
})

module.exports = mongoose.model('home',homeShcema)