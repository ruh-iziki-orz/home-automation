const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    compartment_data:{ type : Array ,
        "default" : [] 
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User',UserSchema)