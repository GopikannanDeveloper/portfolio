const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema({
    degree:{type:String,required:true},
    location:{type:String,required:true},
    institution_name:{type:String,required:true},
    duration:{type:String,required:true},
    createdAt: { type: Date, default: Date.now },
})

const education = mongoose.model('education', educationSchema);

module.exports = education;