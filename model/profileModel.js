const mongoose = require('mongoose')
const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    birthday:{
        type:Date,
    },
    gender:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("Profile",profileSchema)
