const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
    mac_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Device',DeviceSchema)