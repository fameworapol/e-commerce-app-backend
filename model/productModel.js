const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true
    },
    description:{
        type:String,
        require:true
    },
    img:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    },
    price:{
        type:Number,
    },
    rate:{
        type:Number
    }
},{timestamps:true})
module.exports = mongoose.model("Product",productSchema)
