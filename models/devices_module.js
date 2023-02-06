
const mongoose = require('mongoose')

const DeviceSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    data:{ type : Array , "default" : [] },
    created_at:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Device',DeviceSchema)